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

  if (isFullScreen)
    return (
      <div className="relative flex flex-col justify-between w-full h-screen bg-sky-950">
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
    );

  return (
    <div className="flex h-screen py-3 pl-3 bg-sky-950">
      <SideBar
        meetingId={meetingId}
        participantsCount={allParticipants.length + 1}
      />

      <div className="relative flex flex-col justify-between w-full h-full mr-4">
        <Header
          topic={topic}
          committee={committee}
          caseNumber={caseNumber}
          isRecording={isRecording}
          isFullScreen={isFullScreen}
          onShowFullScreen={() => setIsFullScreen(true)}
        />

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
