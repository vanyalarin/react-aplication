import React from "react";
import Header from "./components/Header/Header";
import LearningSection from "./components/LearningSection";
import DifferencesSection from "./components/DifferenscesSection";
import IntroSection from "./components/IntroSection";
import FeedbackSection from "./components/FeedbackSection";
import TabsSection from "./components/TabsSection";
import EffectSection from "./components/EffectSrction";

function App() {
  const [activeTab, setActiveTab] = React.useState("effect");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection
          active={activeTab}
          onChange={(current) => setActiveTab(current)}
        />

        {activeTab === "main" && (
          <>
            <LearningSection />
            <DifferencesSection />
          </>
        )}
        {activeTab === "feedback" && <FeedbackSection />}

        {activeTab === "effect" && <EffectSection />}
      </main>
    </>
  );
}

export default App;
