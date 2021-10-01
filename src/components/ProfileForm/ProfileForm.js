import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profilesOperations, profilesSelectors } from "../../redux/profile";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import s from "./ProfileForm.module.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
function ProfileForm({ onClose }) {
  const dispatch = useDispatch();
  // const profile = useSelector(profilesSelectors.getProfile);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [value, setValue] = useState("female");
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "city":
        setCity(value);
        break;

      default:
        return;
    }
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === "" || number.trim() === "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkEmptyQuery(name, city)) {
      return toast.info("Enter the contact's");
    } else {
      dispatch(profilesOperations.addProfile(name, city, value));
    }
    resetInput();
  };

  const resetInput = () => {
    setName("");
    setCity("");
    onClose();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        color="primary"
        type="text"
        name="name"
        fullWidth
        value={name}
        onChange={handleChange}
        className={s.textField}
      />
      <TextField
        label="city"
        variant="outlined"
        color="primary"
        type="text"
        name="city"
        fullWidth
        value={city}
        onChange={handleChange}
        className={s.textField}
      />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          defaultValue="female"
          name="radio-buttons-group"
          value={value}
          onChange={handleValueChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
}

export default ProfileForm;
