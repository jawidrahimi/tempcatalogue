document.addEventListener('DOMContentLoaded', () => {
    const projectTitleElement = document.querySelector('.project-title');
    const mediaCollageElement = document.querySelector('.project-media-collage');

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const projectData = {
        "photo-project-1": { name: "Awesome Photoshoot", media: ["images/photo1.jpg", "images/photo2.jpg"], type: "photo" },
        "video-project-1": { name: "Amazing Video Project", media: ["videos/my_video.mp4"], type: "video" },
        // Add more project data here
    };

    if (projectId && projectData[projectId]) {
        const project = projectData[projectId];
        projectTitleElement.textContent = project.name;

        project.media.forEach(item => {
            if (project.type === "photo") {
                const img = document.createElement('img');
                img.src = item;
                mediaCollageElement.appendChild(img);
            } else if (project.type === "video") {
                const video = document.createElement('video');
                video.controls = true;
                video.src = item;
                mediaCollageElement.appendChild(video);
            }
        });
    } else {
        projectTitleElement.textContent = "Project Not Found";
    }
});