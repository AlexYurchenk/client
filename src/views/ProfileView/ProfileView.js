import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProfileList from "../../components/ProfileList";
import ProfileForm from "../../components/ProfileForm";
import Typography from "@material-ui/core/Typography";
import { profilesOperations } from "../../redux/profile";
import s from "./ProfileView.module.css";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Modal from "../../components/Modal/Modal";
export default function ProfilesView() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => dispatch(profilesOperations.fetchProfile()), [dispatch]);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Container className={s.wrapper} maxWidth="xs">
      <Typography className={s.title} color="primary" variant="h3">
        Profile
      </Typography>
      <ProfileList />
      <IconButton
        onClick={toggleModal}
        className={s.add}
        color="primary"
        aria-label="add profile"
      >
        <AddIcon />
      </IconButton>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ProfileForm onClose={toggleModal} />
        </Modal>
      )}
    </Container>
  );
}
