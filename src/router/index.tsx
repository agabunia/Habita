import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/home/HomePage";
import DevelopersPage from "../pages/developers/DevelopersPage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import OffersPage from "../pages/offers/OffersPage";
import ProjectDetailsPage from "../pages/developer-details/DeveloperDetailsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import MyProjectsPage from "../pages/profile/profile-projects/MyProjectsPage";
import ProfileHistoryPage from "../pages/profile/profile-history/ProfileHistoryPage";
import ProfileDevelopersPage from "../pages/profile/profile-developers/ProfileDevelopersPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "developers", element: <DevelopersPage /> },
      { path: "developers/:id", element: <ProjectDetailsPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "offers", element: <OffersPage /> },
      {
        path: "profile",
        element: <ProfilePage />,
        children: [
          { index: true, element: <MyProjectsPage /> },
          { path: "history", element: <ProfileHistoryPage /> },
          { path: "developers", element: <ProfileDevelopersPage /> },
        ],
      },
    ],
  },
]);
