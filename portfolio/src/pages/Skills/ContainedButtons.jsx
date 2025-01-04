import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const options = {
  shouldForwardProp: (prop) => prop !== "gradientColors",
};

const borderRadius = 50;
const RoundGradientButton = styled(
  Button,
  options
)(({ gradientColors }) => ({
  position: "relative",
  border: "1px solid transparent",
  backgroundClip: "padding-box",
  borderRadius,

  "&:after": {
    position: "absolute",
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: `linear-gradient(to left, ${gradientColors.join(",")})`,
    content: '""',
    zIndex: -2,
    borderRadius,
  },
}));

export default function ContainedButtons({ children, icon, ...props }) {
  return (
    <RoundGradientButton
      gradientColors={["#00FF94", "#00D9FF"]}
      variant="contained"
      endIcon={icon}
      {...props}
    >
      {children}
    </RoundGradientButton>
  );
}

ContainedButtons.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
};
