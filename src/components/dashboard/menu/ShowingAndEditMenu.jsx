"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// SortableItem component
function SortableItem({ id, index, item, updateItem, removeItem }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        marginBottom: "10px",
    };

    return (
        <div ref={setNodeRef} style={style}>
            <div className="form-row mb-2 bg-light p-2 rounded d-flex align-items-center">
                <div
                    className="me-2 cursor-grab"
                    style={{ padding: "0 8px", fontSize: "20px", userSelect: "none" }}
                    {...attributes}
                    {...listeners}
                >
                    &#x2630;
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Menu Name"
                        value={item.name}
                        onChange={(e) => updateItem(index, "name", e.target.value)}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Menu Link"
                        value={item.link}
                        onChange={(e) => updateItem(index, "link", e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeItem(index)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

// Main component
function ShowingAndEditMenu() {
    const [menus, setMenus] = useState([]);
    const [updateGroup, setUpdateGroup] = useState(null);
    const [editingGroup, setEditingGroup] = useState(null);

    const fetchMenus = async () => {
        try {
            const res = await fetch("/api/dashboard/menus");
            const result = await res.json();

            const formatted = result.data.map((group) => ({
                title: group.title,
                meta_key: group.meta_key,
                items: group.menuitem.map((item) => ({
                    name: item.name,
                    link: item.link,
                })),
            }));
            setMenus(formatted);
        } catch (error) {
            console.error("Failed to load menus:", error);
        }
    };

    useEffect(() => {
        fetchMenus();
        console.log(menus)
    }, []);

    const addNewItem = () => {
        if (!updateGroup) return;
        setUpdateGroup({
            ...updateGroup,
            items: [...updateGroup.items, { name: "", link: "" }],
        });
    };

    const updateItem = (index, key, value) => {
        const updated = [...updateGroup.items];
        updated[index][key] = value;
        setUpdateGroup({ ...updateGroup, items: updated });
    };

    const saveGroupUpdate = async () => {
        const filteredItems = updateGroup.items.filter(
            (item) => item.name.trim() !== "" || item.link.trim() !== ""
        );

        const cleanedGroup = {
            ...updateGroup,
            items: filteredItems,
        };

        const response = await fetch("/api/dashboard/menus", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cleanedGroup),
        });

        const result = await response.json();
        if (result.status === 200) {
            toast("Menu updated successfully", { position: "top-right" });
            fetchMenus();
            setUpdateGroup(null);
            setEditingGroup(null);
        } else {
            alert("Update failed");
        }
    };

    const handleEditGroup = (group) => {
        setEditingGroup(group.meta_key);
        setUpdateGroup(group);
    };

    const handleDeleteGroup = async (group) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete the group "${group.title}"? This action cannot be undone.`
        );

        if (!confirmed) return;

        try {
            const response = await fetch("/api/dashboard/menus", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ meta_key: group.meta_key }),
            });

            const result = await response.json();

            if (result.status === 200) {
                fetchMenus();
                toast("Menu Deleted successfully", { position: "top-right" });
            } else {
                alert("Failed to delete group");
            }
        } catch (error) {
            toast("Delete failed:", {
                position: "top-center",
            });
        }
    };

    const removeItem = (index) => {
        const updated = [...updateGroup.items];
        updated.splice(index, 1);
        setUpdateGroup({ ...updateGroup, items: updated });
    };

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!active || !over || active.id === over.id) return;

        const oldIndex = parseInt(active.id);
        const newIndex = parseInt(over.id);

        const reordered = arrayMove(updateGroup.items, oldIndex, newIndex);
        setUpdateGroup({ ...updateGroup, items: reordered });
    };

    return (
        <div className="w-50">
            <h4>All Menu Groups</h4>
            <div className="accordion" id="accordionExample">
                {menus.map((group, groupIndex) => {
                    const isEditing = updateGroup?.meta_key === group.meta_key;

                    return (
                        <div className="accordion-item" key={group.meta_key || groupIndex}>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-${groupIndex}`}
                                    aria-expanded="true"
                                    aria-controls={`collapse-${groupIndex}`}
                                >
                                    {group.title}
                                </button>
                            </h2>
                            <div
                                id={`collapse-${groupIndex}`}
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <div className="group-action mb-2">
                                        <button
                                            className="btn btn-danger btn-sm me-2"
                                            onClick={() => handleDeleteGroup(group)}
                                        >
                                            Delete Group
                                        </button>

                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() =>
                                                isEditing ? saveGroupUpdate() : handleEditGroup(group)
                                            }
                                        >
                                            {isEditing ? "Save Group" : "Edit Group"}
                                        </button>
                                    </div>

                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Menu Group Title"
                                        value={isEditing ? updateGroup.title : group.title}
                                        onChange={(e) =>
                                            isEditing &&
                                            setUpdateGroup({ ...updateGroup, title: e.target.value })
                                        }
                                        disabled={!isEditing}
                                    />

                                    {isEditing ? (
                                        <DndContext
                                            sensors={sensors}
                                            collisionDetection={closestCenter}
                                            onDragEnd={handleDragEnd}
                                        >
                                            <SortableContext
                                                items={updateGroup.items.map((_, i) => `${i}`)}
                                                strategy={verticalListSortingStrategy}
                                            >
                                                {updateGroup.items.map((item, index) => (
                                                    <SortableItem
                                                        key={index}
                                                        id={`${index}`}
                                                        index={index}
                                                        item={item}
                                                        updateItem={updateItem}
                                                        removeItem={removeItem}
                                                    />
                                                ))}
                                            </SortableContext>
                                        </DndContext>
                                    ) : (
                                        group.items.map((item, index) => (
                                            <div key={index} className="form-row mb-2">
                                                <div className="col">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={item.name}
                                                        disabled
                                                    />
                                                </div>
                                                <div className="col">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={item.link}
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    )}

                                    {isEditing && (
                                        <button
                                            className="btn btn-primary btn-sm mt-2"
                                            onClick={addNewItem}
                                        >
                                            + Add Item
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ShowingAndEditMenu;
