// Load artists dynamically
function loadArtists() {
    const container = $("#artist-container");
    container.empty(); // Clear container

    $.each(artists, (id, artist) => {
        container.append(`
            <div class="artist-card" data-id="${id}">
                <img src="${artist.images}" alt="${artist.name}">
                <h3>${artist.name}</h3>
                <button class="display-artwork-btn">Display</button>
                <button class="delete-artist-btn">Delete</button>
            </div>
        `);
    });
}

// Open gallery for a specific artist
function openGallery(id) {
    const artist = artists[id];
    $("#artist-name").text(`${artist.name}'s Gallery`);
    const galleryContent = $("#gallery-content");
    galleryContent.empty(); // Clear gallery content

    artist.artworks.forEach((artwork, index) => {
        galleryContent.append(`
            <div class="artwork" data-id="${index}">
                <img src="${artwork.image}" alt="${artwork.title}">
                <h4>${artwork.title}</h4>
                <p><strong>Medium:</strong> ${artwork.medium}</p>
                <p><strong>Size:</strong> ${artwork.size}</p>
                <button class="delete-artwork-btn">Delete</button>
                <button class="update-artwork-btn">Update</button>
                <p class="artwork-details" style="display:none;"></p> <!-- Hidden details paragraph -->
            </div>
        `);
    });

    $("#gallery-display").fadeIn();
} 

// Add new artist
function addNewArtist() {
    const newId = Object.keys(artists).length + 1;
    artists[newId] = { name: `Artist ${newId}`, artworks: [] };
    loadArtists();
}

// Delete artist
function deleteArtist(id) {
    delete artists[id];
    loadArtists();
}

// Add new artwork for a specific artist
function addNewArtwork(artistId) {
    const artwork = {
        title: `New Artwork`,
        medium: "Unknown",
        size: "Unknown",
        image: "images/default.jpg", // You can replace this with a file upload logic
    };
    artists[artistId].artworks.push(artwork);
    openGallery(artistId);
}

// Update artist's artwork details (UPDATE)
function updateArtwork(artistId, artworkIndex) {
    const newTitle = prompt("Enter new title:");
    const newMedium = prompt("Enter new medium:");
    const newSize = prompt("Enter new size:");

    // Check if all fields are filled
    if (newTitle && newMedium && newSize) {
        // Update the artwork
        artists[artistId].artworks[artworkIndex] = {
            ...artists[artistId].artworks[artworkIndex],
            title: newTitle,
            medium: newMedium,
            size: newSize
        };
        // Refresh the gallery to reflect changes
        openGallery(artistId);
    } else {
        // Show an error message if any field is missing
        alert("You should update all the information!"); // Using alert to show an error
        // Alternatively, you could display the message in an HTML element, like:

    }
}

// Delete artwork
function deleteArtwork(artistId, artworkIndex) {
    artists[artistId].artworks.splice(artworkIndex, 1);
    openGallery(artistId);
}

// Document Ready (Event Bindings)
$(document).ready(() => {
    loadArtists();

    $(document).on("click", ".artist-card", function () {
        const id = $(this).data("id");
        openGallery(id);
    });

    $(document).on("click", "#add-artist-btn", addNewArtist);

    $(document).on("click", ".delete-artist-btn", function (e) {
        e.stopPropagation();
        const id = $(this).parent().data("id");
        deleteArtist(id);
    });

    $(document).on("click", "#add-artwork-btn", function () {
        const artistId = $("#artist-name").text().split("'s")[0];
        addNewArtwork(Object.keys(artists).find(key => artists[key].name === artistId));
    });

    $(document).on("click", ".delete-artwork-btn", function () {
        const artworkIndex = $(this).parent().data("id");
        const artistId = $("#artist-name").text().split("'s")[0];
        deleteArtwork(Object.keys(artists).find(key => artists[key].name === artistId), artworkIndex);
    });

    $(document).on("click", ".update-artwork-btn", function () {
        const artworkIndex = $(this).parent().data("id");
        const artistId = $("#artist-name").text().split("'s")[0];
        updateArtwork(Object.keys(artists).find(key => artists[key].name === artistId), artworkIndex);
        $("#update-message").text("You need to update all of them!").show();
    });

    $("#close-gallery-btn").click(() => $("#gallery-display").fadeOut());
});

