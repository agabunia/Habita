export type ReviewType = {
  id: number;
  developer_id: number;
  author_name: string;
  author_avatar_location?: string;
  rating: number;
  comment_geo: string;
  likes: number;
  replies: number;
  date: string;
};

export type ReviewStatsType = {
  developer_id: number;
  comments_count: number;
  ratings_count: number;
};

export const reviewStats: ReviewStatsType[] = [
  { developer_id: 1, comments_count: 27, ratings_count: 19 },
  { developer_id: 2, comments_count: 18, ratings_count: 14 },
  { developer_id: 3, comments_count: 21, ratings_count: 17 },
  { developer_id: 4, comments_count: 12, ratings_count: 9 },
  { developer_id: 5, comments_count: 24, ratings_count: 20 },
  { developer_id: 6, comments_count: 15, ratings_count: 11 },
  { developer_id: 7, comments_count: 16, ratings_count: 12 },
  { developer_id: 8, comments_count: 10, ratings_count: 8 },
];

export const reviews: ReviewType[] = [
  {
    id: 1,
    developer_id: 1,
    author_name: "Gigi 12312414",
    author_avatar_location: "blox.jpg",
    rating: 4,
    comment_geo:
      "საკმაოდ არასანდო ფასის საკითხებში და საბოლოოდ ვისაც გავერე. მხოლოდ საინტერესო ისტორიების ყვება ძველ ბინებზე.",
    likes: 12,
    replies: 5,
    date: "2026-04-18",
  },
  {
    id: 2,
    developer_id: 1,
    author_name: "Gigi 12312414",
    rating: 4,
    comment_geo:
      "ბარათის CHIROKO დაკვებული გემო, რომელიც ძალიან კომფორტულია. შევუე კვოვის ჩირთი, როგორი კარანგელიო.",
    likes: 12,
    replies: 5,
    date: "2026-04-12",
  },
  {
    id: 3,
    developer_id: 1,
    author_name: "Gigi 12312414",
    author_avatar_location: "archi.jpg",
    rating: 4,
    comment_geo:
      "ბარათის CHIROKO დაკვებული გემო, რომელიც ძალიან კომფორტულია. შევუე კვოვის ჩირთი, როგორი კარანგელიო,",
    likes: 12,
    replies: 5,
    date: "2026-04-08",
  },
  {
    id: 4,
    developer_id: 1,
    author_name: "Nika 45127890",
    author_avatar_location: "m2.jpg",
    rating: 5,
    comment_geo:
      "მენეჯერთან კომუნიკაცია სწრაფი იყო და ყველა დეტალი დროულად გამიზიარეს. განსაკუთრებით მომეწონა პროექტის მდებარეობა.",
    likes: 18,
    replies: 4,
    date: "2026-03-29",
  },
  {
    id: 5,
    developer_id: 1,
    author_name: "Ana 88912003",
    rating: 3,
    comment_geo:
      "ინფორმაცია ზოგჯერ დაგვიანებით მოდიოდა, თუმცა საბოლოოდ პასუხები მივიღე. კარგი იქნება მეტი გამჭვირვალობა გადახდებზე.",
    likes: 7,
    replies: 2,
    date: "2026-03-22",
  },
  {
    id: 6,
    developer_id: 1,
    author_name: "Mari 10293847",
    author_avatar_location: "deka.jpg",
    rating: 4,
    comment_geo:
      "შენობის ხარისხი კარგად გამოიყურება და გუნდი ყურადღებიანია. შეხვედრაზე ყველა კითხვა დეტალურად განვიხილეთ.",
    likes: 14,
    replies: 6,
    date: "2026-03-14",
  },
  {
    id: 7,
    developer_id: 1,
    author_name: "Dato 77881221",
    rating: 4,
    comment_geo:
      "პროექტი მომეწონა, განსაკუთრებით ეზოს და საერთო სივრცეების დაგეგმვა. ფასის ნაწილი უფრო მოქნილი რომ იყოს, უკეთესი იქნებოდა.",
    likes: 9,
    replies: 3,
    date: "2026-03-05",
  },
  {
    id: 8,
    developer_id: 1,
    author_name: "Tako 66420117",
    author_avatar_location: "biograpi.jpg",
    rating: 5,
    comment_geo:
      "ძალიან კარგი გამოცდილება მქონდა. კონსულტანტმა ზუსტად მომარგო ბინის ვარიანტები ჩემს ბიუჯეტსა და საჭიროებებს.",
    likes: 21,
    replies: 8,
    date: "2026-02-27",
  },
  {
    id: 9,
    developer_id: 1,
    author_name: "Levan 54321109",
    rating: 4,
    comment_geo:
      "ადგილმდებარეობა პრაქტიკულია და მშენებლობის პროგრესიც თვალსაჩინოა. ფოტოები და განახლებები რეგულარულად იდება.",
    likes: 11,
    replies: 5,
    date: "2026-02-18",
  },
  {
    id: 10,
    developer_id: 1,
    author_name: "Sopo 12004598",
    author_avatar_location: "white_square.jpg",
    rating: 4,
    comment_geo:
      "საერთო შთაბეჭდილება დადებითია. ვისურვებდი, რომ პარკინგის პირობები უფრო მარტივად ყოფილიყო ახსნილი.",
    likes: 10,
    replies: 2,
    date: "2026-02-09",
  },
  {
    id: 11,
    developer_id: 2,
    author_name: "Irakli 34217890",
    author_avatar_location: "archi.jpg",
    rating: 5,
    comment_geo:
      "კარგი გუნდი და მოწესრიგებული პროცესი. პროექტის შესახებ ყველა დოკუმენტი დროულად მივიღე.",
    likes: 16,
    replies: 4,
    date: "2026-04-11",
  },
  {
    id: 12,
    developer_id: 3,
    author_name: "Elene 78234511",
    author_avatar_location: "m2.jpg",
    rating: 4,
    comment_geo:
      "თანამედროვე დაგეგმარებაა და კონსულტაცია სასარგებლო აღმოჩნდა. ფასები საშუალოზე მაღალია.",
    likes: 13,
    replies: 3,
    date: "2026-03-18",
  },
];

export const getReviewsByDeveloper = (developerId: number): ReviewType[] => {
  return reviews.filter((review) => review.developer_id === developerId);
};

export const getReviewStatsByDeveloper = (
  developerId: number,
): ReviewStatsType => {
  const existingStats = reviewStats.find(
    (stats) => stats.developer_id === developerId,
  );
  const developerReviews = getReviewsByDeveloper(developerId);

  return (
    existingStats || {
      developer_id: developerId,
      comments_count: developerReviews.length,
      ratings_count: developerReviews.length,
    }
  );
};
