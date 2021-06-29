export interface PaletteProps {
  primary: string;
  background: string;
  contrastBg: string;
  text: string;
  contrastText: string;
  buttonBg: string;
  buttonText: string;
  inputText: string;
  inputBg: string;
  markerColor: string;
  markerFilledColor: string;
}

export const light: PaletteProps = {
  primary: "#273FAD",
  background: "#FFF",
  contrastBg: "rgba(25, 61, 223, 0.1)",
  text: "#3D3D4D",
  contrastText: "#FFF",
  buttonBg: "#3FAD27",
  buttonText: "#FFF",
  inputText: "#A09CB1",
  inputBg: "#F5F4F8",
  markerColor: "#3D3D4D",
  markerFilledColor: "#273FAD",
};

export const dark: PaletteProps = {
  primary: "#191932",
  background: "#10101E",
  contrastBg: "rgba(33, 33, 54, 0.3)",
  text: "#565BFF",
  contrastText: "#E1E1E6",
  buttonBg: "#565BFF",
  buttonText: "#FFF",
  inputText: "#E1E1E6",
  inputBg: "#212136",
  markerColor: "#565BFF",
  markerFilledColor: "#565BFF",
};
