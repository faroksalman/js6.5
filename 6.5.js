function createRatingMatrix(movies) {
    const ratingMatrix = [];
  
    for (const movie of movies) {
      ratingMatrix.push(movie.ratings);
    }
  
    return ratingMatrix;
  }
  
  // Example usage:
  const movies = [
    { title: "Movie 1", ratings: [8, 7, 9] },
    { title: "Movie 2", ratings: [6, 8, 7] }
  ];
  
  