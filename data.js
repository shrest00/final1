const artists = {
    artist1: {
        name: "Emma Overman", 
        images: "images/Emma.jpg",
        artworks: [
          { title: "All Present for the Garden Party", medium: "acrylic on wood", size: "49x 49 inches", image: "images/emma1.jpg" },
          { title: "Frenemies", medium: "acrylic on wood", size: "25x17 inches", image: "images/E'Frenemies.jpg" },
          { title: "Tree Huggers", medium: "acrylic on masonite", size: "28x40 inches", image: "images/E'Tree_Huggers.jpg" },
          { title: "Heist", medium: "acrylic on masonite", size: "16x20 inches", image: "images/E'Heist.jpg" },
        ]
    },

    artist2: {
        name: "Kyle Ragsdale",
        images: "images/Kyle.jpg",
        artworks: [
          { title: "Faithful Presence", medium: "Oil on Canvas", size: "48x48 inches", image: "images/K'Faithful+Presence.jpg" },
          { title: "Just Waiting For You To Ask", medium: "Oil on Canvass", size: "48x60 inches", image: "images/K'Just+Waiting+for+You+to+Ask.jpg" },
          { title: "We Got This All Ready For You", medium: "Oil on Canvas", size: "64x89 inches", imaeg: "images/Kyle-We+Got+This+All+Ready+for+You.jpgg" },
          { title: "Flight Lessons", medium: "Oil on Canvas", size: "24x24 inches", image: "images/K'Flight+Lessons.jpg" },
          
        ]
    },
    
    artist3: {
        name: "Esayas Zerazion", 
        images: "images/Esay.jpg",
        artworks: [
          { title: "Deer", medium: "Scratchboard", size: "8x8 inches", image: "images/Es'Deer.jpg" },
          { title: "Jagur", medium: "Scratchboard", size: "8x8 inches", image: "images/Es'Jaguar.jpg" },
          { title: "Priceless", medium: "Scratchboard", size: "8x8 inches", image: "images/Es'Priceless.jpg" },
          { title: "Random",  medium: "Scratchboard", size: "8x8 inches", image: "images/Es'Random.jpg" },
          
        ]
    },
    

};

function getArtists() {
    return artists;
}
