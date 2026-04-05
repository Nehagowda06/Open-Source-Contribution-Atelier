import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { ChallengePage } from "../pages/ChallengePage";
import { CommunityPage } from "../pages/CommunityPage";
import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";
import { LessonPage } from "../pages/LessonPage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";


export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/lessons/:slug" element={<LessonPage />} />
        <Route path="/challenges" element={<ChallengePage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Route>
    </Routes>
  );
}

