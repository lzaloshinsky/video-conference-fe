import data from "./data"; // TODO fetch from BE
import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Conference from "./components/Conference";

const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const {
    topic,
    judges,
    parties,
    committee,
    startDate,
    caseNumber,
    isRecording,
    id: meetingId,
  } = data;

  const allParticipants = [...judges, ...parties];

  const currentParticipantId = allParticipants.find(
    (participant) => participant.isCurrent
  )?.id;

  return (
    <div
      className={`h-screen bg-sky-950 flex ${isFullScreen ? "" : "py-3 pl-3"}`}
    >
      {!isFullScreen && (
        <SideBar
          meetingId={meetingId}
          participantsCount={allParticipants.length + 1}
        />
      )}

      <div
        className={`flex flex-col h-full w-full relative justify-between ${
          isFullScreen ? "" : "mr-4"
        }`}
      >
        {!isFullScreen && (
          <Header
            topic={topic}
            committee={committee}
            caseNumber={caseNumber}
            isRecording={isRecording}
            isFullScreen={isFullScreen}
            onShowFullScreen={() => setIsFullScreen(true)}
          />
        )}

        <Conference
          judges={judges}
          parties={parties}
          committee={committee}
          startDate={startDate}
          meetingId={meetingId}
          isFullScreen={isFullScreen}
          currentParticipantId={currentParticipantId}
          onCloseFullscreenClick={() => setIsFullScreen(false)}
        />
      </div>
    </div>
  );
};

export default App;
