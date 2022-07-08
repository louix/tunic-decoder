// import * as Styles from './styles.css';
import type { JSX } from "preact/jsx-runtime"
import { useReducer, useState } from 'preact/hooks';
import { consonants, vowels, mkConsonantSvgData, mkVowelSvgData } from './Chars';

const scale = 20
const strokeWidth = 1

const colours = {
  selected: "#FFFFFF",
  unselected: "#333333"
}

const getStyle = (selected: boolean) => ({
  strokeWidth,
  fill: "none",
  stroke: selected ? colours.selected : colours.unselected,
  strokeLinecap: "round",
  position: "fixed",
  zIndex: 100
})

interface Line {
  id: number,
  d: string,
  selected: boolean
}

const unknown = <span></span>

const getSelectedVowel = (ids: Array<Line>) => {
  const charId = ids.filter(({ selected }) => selected).map(({ id }) => id).join("");
  return vowels[charId] ?? unknown;
}
const getSelectedConsonant = (ids: Array<Line>) => {
  const charId = ids.filter(({ selected }) => selected).map(({ id }) => id).join("");
  return consonants[charId] ?? unknown;
}

type WordReducerAction = { key: "add", value: JSX.Element } | { key: "deleteLast" } | { key: "clear" }

type LineReducerAction = { key: "toggle", value: number } | { key: "unselectAll" }

const toggle = (state: Array<Line>, action: LineReducerAction) => {
  switch (action.key) {
    case "toggle": {
      const newState = [...state];
      if (newState[action.value] !== undefined) {
        newState[action.value].selected = !state[action.value].selected
      }
      return newState
    }
    case "unselectAll": {
      return state.map((x) => ({ ...x, selected: false }));
    }
    default: {
      throw new Error("invalid action")
    }
  }
}

export const App = () => {
  const [selectedVowel, setSelectedVowel] = useState<JSX.Element>(() => unknown);
  const [vowelLines, dispatchVowelLines] = useReducer<Array<Line>, LineReducerAction>(toggle, mkVowelSvgData())

  const [selectedConsonant, setSelectedConsonant] = useState<JSX.Element>(() => unknown);
  const [consonantLines, dispatchConsonantLines] = useReducer<Array<Line>, LineReducerAction>(toggle, mkConsonantSvgData());

  const [switchChars, setSwitchChars] = useState<boolean>(() => false);

  const [word, dispatchWord] = useReducer<Array<JSX.Element>, WordReducerAction>((state, action) => {
    switch (action.key) {
      case "add": {
        return state.concat(action.value)
      }
      case "deleteLast": {
        return state.slice(0, -1)
      }
      case "clear": {
        return [];
      }
      default: {
        throw new Error("invalid action")
      }
    }
  }, []);

  const clearInput = () => {
    dispatchConsonantLines({ key: "unselectAll" });
    dispatchVowelLines({ key: "unselectAll" });
    setSelectedConsonant(unknown);
    setSelectedVowel(unknown);
    setSwitchChars(false)
  }

  const handleConsonantClick = (index: number) => {
    console.log("clicked", index);
    dispatchConsonantLines({ key: "toggle", value: index })
    setSelectedConsonant(getSelectedConsonant(consonantLines))
  }

  const handleVowelClick = (index: number) => {
    dispatchVowelLines({ key: "toggle", value: index })
    setSelectedVowel(getSelectedVowel(vowelLines))
  }

  const handleAddChar = () => {
    dispatchWord({ key: "add", value: conjoinedChar });
    clearInput()
  }

  const handleDeleteLastChar = () => {
    dispatchWord({ key: "deleteLast" });
  }

  const handleClearChars = () => {
    dispatchWord({ key: "clear" });
    clearInput()
  }

  const shouldShowStem = () => consonantLines.some((x) => x.id <= 3 && x.selected);

  const conjoinedChar = switchChars ? <>
    {selectedVowel}
    {selectedConsonant}
  </> : <>
    {selectedConsonant}
    {selectedVowel}
  </>

  return <main>
    <svg width={14 * scale} height={23 * scale}>
      <g transform={`scale(${scale})`}>
        <g id="deselected">
          <g id="vowel">
            {
              /**
               * SVG doesn't have a zIndex kind of property (and zIndex is usually a bad idea).
               * Mapping lines twice using with line.selected as a hack to render the selected lines after the unselected ones.
               * This stops unselected lines from overlapping selected ones.
               */
              vowelLines.map((line, index) => !line.selected && <path
                onClick={() => handleVowelClick(index)}
                key={line.id}
                style={getStyle(line.selected)}
                d={line.d}
                id={`vowel${line.id}`} />)
            }
            {
              vowelLines.map((line, index) => line.selected && <path
                onClick={() => handleVowelClick(index)}
                key={line.id}
                style={getStyle(line.selected)}
                d={line.d}
                id={`vowel${line.id}`} />)
            }
          </g>
          <g id="consonant">
            {
              consonantLines.map((line, index) => !line.selected && <path
                onClick={() => handleConsonantClick(index)}
                key={line.id}
                style={getStyle(line.selected)}
                d={line.d}
                id={`consonant${line.id}`} />)
            }
            {!shouldShowStem() && <path id="stem" style={getStyle(false)} d="M 6.8791668,10.583333 V 7.9375" />}
          </g>
          <g id="switch">
            {
              !switchChars && <path
                z={switchChars ? 0 : 10}
                style={getStyle(switchChars)}
                onClick={() => setSwitchChars(!switchChars)}
                d="m 6.8791666,20.108333 c -0.2078033,0 -0.4143269,0.08555 -0.561266,0.232484 -0.1469391,0.146939 -0.232484,0.353463 -0.232484,0.561266 0,0.207803 0.085545,0.414327 0.232484,0.561266 0.1469391,0.146939 0.3534627,0.232484 0.561266,0.232484 0.2078033,0 0.4143269,-0.08554 0.561266,-0.232484 0.1469391,-0.146939 0.232484,-0.353463 0.232484,-0.561266 0,-0.207803 -0.085545,-0.414327 -0.232484,-0.561266 -0.1469391,-0.146939 -0.3534627,-0.232484 -0.561266,-0.232484 z"
                id="switchChars" />
            }
          </g>
        </g>
        <g id="selected">
          <g id="vowel">
            {
              vowelLines.map((line, index) => line.selected && <path
                onClick={() => handleVowelClick(index)}
                key={line.id}
                style={getStyle(line.selected)}
                d={line.d}
                id={`vowel${line.id}`} />)
            }
          </g>
          <g id="consonant">
            {
              consonantLines.map((line, index) => line.selected && <path
                onClick={() => handleConsonantClick(index)}
                key={line.id}
                style={getStyle(line.selected)}
                d={line.d}
                id={`consonant${line.id}`} />)
            }
            {shouldShowStem() && <path id="stem" style={getStyle(true)} d="M 6.8791668,10.583333 V 7.9375" />}
          </g>
          <g id="switch">
            {
              switchChars && <path
                z={switchChars ? 0 : 10}
                style={getStyle(switchChars)}
                onClick={() => setSwitchChars(!switchChars)}
                d="m 6.8791666,20.108333 c -0.2078033,0 -0.4143269,0.08555 -0.561266,0.232484 -0.1469391,0.146939 -0.232484,0.353463 -0.232484,0.561266 0,0.207803 0.085545,0.414327 0.232484,0.561266 0.1469391,0.146939 0.3534627,0.232484 0.561266,0.232484 0.2078033,0 0.4143269,-0.08554 0.561266,-0.232484 0.1469391,-0.146939 0.232484,-0.353463 0.232484,-0.561266 0,-0.207803 -0.085545,-0.414327 -0.232484,-0.561266 -0.1469391,-0.146939 -0.3534627,-0.232484 -0.561266,-0.232484 z"
                id="switchChars" />
            }
          </g>
          <g id="center">
            <path
              style={getStyle(true)}
              d="M 1.5874999,10.583333 H 12.170838"
              id="center1" />
          </g>
        </g>
      </g>
    </svg>
    <p style="font-size: 2em; text-align: center; min-height: 2em">
      <span style="color: grey">{word}</span>
      {conjoinedChar}
    </p>
    <div style="display: flex">
      <button style="flex: 1" onClick={() => handleAddChar()}>+</button>
      <button style="flex: 1" onClick={() => handleDeleteLastChar()}>-</button>
      <button style="flex: 1" onClick={() => handleClearChars()}>🗑️</button>
    </div>
  </main>
}
