import FeedWrapper from "@/components/feed-wrapper";
import StickyWapper from "@/components/sticky-wrapper";
import React from "react";
import Header from "./header";
import UserProgress from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

// ? flex-row-reverse may be unuseful
const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const [userProgress] = await Promise.all([userProgressData]);
  
  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWapper>
        <UserProgress
          activeCourse={{ title: "spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />{" "}
      </StickyWapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
