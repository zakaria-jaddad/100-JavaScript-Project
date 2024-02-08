import Button from "../ui/Button";
import SubTitle from "../ui/SubTitle";
import ToggleSetting from "../ui/ToggleSetting";
import SoundLogo from "/public/icons/settings/sound.svg";
import Select from "../ui/Select";
import { useSelector } from "react-redux";

function Sound() {
  const sound = useSelector((state) => state.settings.sound);
  return (
    <div className="pb-[12px] mb-[12px] border-b border-eGray">
      <SubTitle title="Sound">
        <SoundLogo width={25} height={25} strokeWidth="2" />
      </SubTitle>

      {/* inputs */}
      <ToggleSetting settingsHeader="Alarm Sound">
        <Select />
      </ToggleSetting>

      <button
        onClick={(e) => {
          e.preventDefault();
          const audiPath = sound.alarmSound.soundPath;
          const myaudio = new Audio(audiPath);
          myaudio.play();
        }}
      >
        click here
      </button>
    </div>
  );
}

export default Sound;
