import { useSelector, useDispatch } from "react-redux";
import { profilesOperations, profilesSelectors } from "../../redux/profile";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

import s from "./ProfileList.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function ProfileList() {
  const dispatch = useDispatch();
  const profile = useSelector(profilesSelectors.getProfile);
  console.log(profile);
  return (
    <>
      {profile.length > 0 && (
        <List className={s.list}>
          {profile &&
            profile.map(({ name, city, gander, id }) => (
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon aria-label="person" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} />
                <ListItemText color="primary" primary={city} />
                <ListItemText color="primary" primary={gander} />
                <ListItemSecondaryAction>
                  <IconButton
                    id={id}
                    onClick={() =>
                      dispatch(profilesOperations.deleteProfile(id))
                    }
                    edge="end"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>
      )}
      {profile.length === 0 && (
        <Typography color="primary" variant="h5">
          There are no profiles in the phone book now
        </Typography>
      )}
    </>
  );
}

export default ProfileList;
