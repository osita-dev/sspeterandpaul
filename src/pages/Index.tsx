import { useState } from "react";
import { Navbar } from "@/components/parish/Navbar";
import { Hero } from "@/components/parish/Hero";
import { TodayProgram } from "@/components/parish/TodayProgram";
import { ReadingsBlock } from "@/components/parish/ReadingsBlock";
import { Announcements } from "@/components/parish/Announcements";
import { LivestreamSection } from "@/components/parish/LivestreamSection";
import { PrayerRequestForm } from "@/components/parish/PrayerRequestForm";
import { DonateSection } from "@/components/parish/DonateSection";
import { MinistriesGrid } from "@/components/parish/MinistriesGrid";
import { GallerySection } from "@/components/parish/GallerySection";
// import { SermonSection } from "@/components/parish/SermonSection";
import { BibleQuiz } from "@/components/parish/BibleQuiz";
import { ChurchUpdates } from "@/components/parish/ChurchUpdates";
import { EventsList } from "@/components/parish/EventsList";
import { Footer } from "@/components/parish/Footer";
import { FloatingActions } from "@/components/parish/FloatingActions";
import { LivestreamModal } from "@/components/parish/LivestreamModal";
import { ReadingsModal } from "@/components/parish/ReadingsModal";
import { toast } from "sonner";

const Index = () => {
  const [livestreamOpen, setLivestreamOpen] = useState(false);
  const [readingsOpen, setReadingsOpen] = useState(false);

  const handleSubscribe = () => {
    toast.success("Thank you! You'll receive daily readings in your inbox.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar isLive={true} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenLivestream={() => setLivestreamOpen(true)}
          onOpenReadings={() => setReadingsOpen(true)}
        />

        {/* Today's Program & Calendar */}
        <TodayProgram />

        {/* Daily Readings / Devotional */}
        <ReadingsBlock onSubscribe={handleSubscribe} />

        {/* Announcements */}
        <Announcements />

        {/* Live / Past Mass Videos */}
        <LivestreamSection onOpenLivestream={() => setLivestreamOpen(true)} />

        {/* Prayer Request */}
        <PrayerRequestForm />

        {/* Donate / Thanksgiving */}
        <DonateSection />

        {/* Ministries */}
        <MinistriesGrid />

        {/* Gallery */}
        <GallerySection />

        {/* Sermon Notes & Audio */}
        {/* <SermonSection /> */}

        {/* Bible Quiz */}
        <BibleQuiz />

        {/* Church Updates */}
        <ChurchUpdates />

        {/* Events */}
        <EventsList />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (Mobile) */}
      <FloatingActions />

      {/* Modals */}
      <LivestreamModal
        isOpen={livestreamOpen}
        onClose={() => setLivestreamOpen(false)}
      />
      <ReadingsModal
        isOpen={readingsOpen}
        onClose={() => setReadingsOpen(false)}
      />
    </div>
  );
};

export default Index;
