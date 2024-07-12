import { Navigate, RouteObject } from "react-router-dom";
import { SignUpForm } from "features/auth/ui/signUpForm/signUpForm";
import { Users } from "features/usersList/ui/users";
import { PartnerCard } from "features/partnerСard/partnerСard";
import { NotFoundPage } from "components/notFoundPage/notFoundPage";
import { SignInForm } from "features/auth/ui/signInForm/signInForm";

export const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <SignUpForm />,
        path: "/sign-up",
      },
      {
        element: <Navigate to={"/sign-in"} />,
        index: true,
      },
      {
        element: <NotFoundPage />,
        path: "/not-found",
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignInForm />,
  },
];

export const privateRoutes: RouteObject[] = [
  {
    element: <Users />,
    path: "/our_team",
  },
  { element: <PartnerCard />, path: `/users/:id` },
];
