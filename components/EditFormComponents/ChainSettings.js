import styled from "styled-components";

export default function ChainSettings({settings, setSettings}) {
  function changeSettings(event, settings, setSettings) {
    const value = event.target.value;
    setSettings(settings.map((setting) => {
      if (value == 'repeat') {
        return {...setting, repeatTimerChain: !setting.repeatTimerChain}
      }
      return setting;
    }));
  }
    return (
        <Settings>
            <RepeatInput type="checkbox" id="repeatTimerChain" name="repeatTimerChain" value="repeat" checked={settings[0].repeatTimerChain} onChange={(event) =>
                    changeSettings(
                      event,
                      settings,
                      setSettings
                    )
                  }/>
            <RepeatLabel htmlFor="repeatTimerChain">repeat timer chain</RepeatLabel>
        </Settings>
    );
}

const Settings = styled.div`
  background-color: rgba(52, 108, 61, 0.7);
  margin: 5px 25vw;
  border-radius: 5px;
  padding: 15px 0;
  color: #caf6ff;
`;

const RepeatInput = styled.input`
  -webkit-appearance: none;

  &::before{
  margin: -2px 0 0 7px;
  margin-right: 50px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #edffdf;
  display: block;
  content: "";
  float: left;
  margin-right: 5px;
}

&:hover:before{
  background-color: #caf6ff;
  box-shadow: 0 0 10px rgba(73, 245, 236, 1), 0 0 5px rgba(73, 245, 236, 1);
}

&:checked:before{
  background-color: #caf6ff;
  box-shadow: 0 0 20px rgba(73, 245, 236, 1), 0 0 15px rgba(73, 245, 236, 1), 0 0 10px rgba(73, 245, 236, 1), 0 0 7.5px rgba(73, 245, 236, 1), 0 0 5px rgba(73, 245, 236, 1), 0 0 2.5px rgba(73, 245, 236, 1);
}
`;

const RepeatLabel = styled.label`
  position: absolute;
  margin-left: 2px;
`;