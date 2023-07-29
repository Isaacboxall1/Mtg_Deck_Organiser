import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { comfortaaTheme } from "@/utility/styles/muiTheme";
import { ThemeProvider } from "@mui/material/styles";

export default function DropDownSelector({
  rarity,
  setRarity,
  format,
  setFormat,
}) {
  const handleChange = (event) => {
    setRarity(event.target.value);
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  const dropDownSelectStyle = {
    boxShadow: "8px 8px 17px #e3c3c3, -8px -8px 17px #fff3f3",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#e3c3c3",
    },
  }

  return (
    <ThemeProvider theme={comfortaaTheme}>
      <Box
        sx={{
          minWidth: 150,
          height: 100,
          display: "flex",
          flexDirection: "column",
          alignContent: "space-between",
          gap: "1em",
          outline: "none",
          
        }}
      >
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Rarity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={rarity}
            placeholder="All"
            label="Rarity"
            onChange={handleChange}
            sx={dropDownSelectStyle}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"Common"}>Common</MenuItem>
            <MenuItem value={"Uncommon"}>Uncommon</MenuItem>
            <MenuItem value={"Rare"}>Rare</MenuItem>
            <MenuItem value={"Mythic"}>Mythic</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Format</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={format}
            placeholder="All"
            label="Format"
            onChange={handleFormatChange}
            sx={dropDownSelectStyle}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"Standard"}>Standard</MenuItem>
            <MenuItem value={"Modern"}>Modern</MenuItem>
            <MenuItem value={"Commander"}>Commander</MenuItem>
            <MenuItem value={"Vintage"}>Vintage</MenuItem>
            <MenuItem value={"Historic"}>Historic</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
