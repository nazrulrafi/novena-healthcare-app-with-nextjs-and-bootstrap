export async function getCloudImgUrl(file) {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Upload failed');
    }

    const data = await res.json();
    return data.url;
}
