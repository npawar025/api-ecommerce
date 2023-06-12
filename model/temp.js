[
  {
    $match: {
      product: new ObjectId("6486ad1df7819701c6f7f74c"),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: "$rating",
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
];
