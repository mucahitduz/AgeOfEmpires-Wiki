import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { InputGroup, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setUnits } from "../../redux/features/unitSlice";
import styles from "./filterSlider.module.scss";

function valuetext(value) {
  return `${value}`;
}

const FilterSlider = ({ label }) => {
  const dispatch = useDispatch();
  const filterStatus = useSelector((state) => state.units);
  const [check, setCheck] = useState(false);

  return (
    <Row className={styles.row}>
      <Col className={styles.checkbox}>
        <InputGroup size="lg">
          <InputGroup.Text className={styles.text}>{label}</InputGroup.Text>
          <InputGroup.Checkbox
            className={styles.checkbox__tick}
            onChange={() => {
              setCheck(!check);
              dispatch(
                setFilter({
                  type: "COST",
                  costName: label,
                  value: filterStatus[label].value,
                  checked: !filterStatus[label].checked,
                })
              );
            }}
            value={filterStatus[label].value}
          />
        </InputGroup>
      </Col>
      <Col className={styles.input}>
        <Box className={styles.sliderBox}>
          <Slider
            max={200}
            min={0}
            getAriaLabel={() => "Resource Cost"}
            value={filterStatus[label].value}
            onChange={(costFilter) => {
              dispatch(
                setUnits({
                  type: "COST_FILTER",
                  payload: {
                    age: "All",
                    costName: label,
                    value: costFilter.target.value,
                  },
                })
              );
            }}
            getAriaValueText={valuetext}
            disabled={!filterStatus[label].checked}
          />
        </Box>
      </Col>
      <Col className={styles.value}>
        <span>{`${filterStatus[label].value[0]}`}</span>
        {" - "}
        <span>{`${filterStatus[label].value[1]}`}</span>
      </Col>
      <Col />
      <Col />
    </Row>
  );
};

export default FilterSlider;
