import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { comfortaaTheme } from "@/utility/styles/muiTheme";
import { ThemeProvider } from "@mui/material/styles";
import styles from "./manaslider.module.css";
function valuetext(value) {
  return `${value} mana`;
}

const minDistance = 1;

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6+",
  },
];

export default function ManaSlider({ manaRange, setManaRange }) {
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setManaRange([
        Math.min(newValue[0], manaRange[1] - minDistance),
        manaRange[1],
      ]);
    } else {
      setManaRange([
        manaRange[0],
        Math.max(newValue[1], manaRange[0] + minDistance),
      ]);
    }
  };

  return (
    <div className={styles.manaSliderContainer}>
      <p>CMC Range</p>
      <ThemeProvider theme={comfortaaTheme}>
        <Box sx={{ width: 130 }}>
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={manaRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            marks={marks}
            min={0}
            max={6}
          />
        </Box>
      </ThemeProvider>
    </div>
  );
}
