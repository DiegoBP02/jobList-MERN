import { MdDeleteForever, MdOutlinePlaylistAdd } from "react-icons/md";
import moment from "moment";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const SingleJobList = ({ position, company, createdAt, status, _id }) => {
  const { setEditJob, deleteJob } = useAppContext();

  const navigate = useNavigate();

  const firstLetter = position.charAt(0);

  let date = moment(createdAt);
  date = date.format("MMMM Do, YYYY");

  return (
    <article className="single-job">
      <span className="icon">{firstLetter}</span>
      <p>{position}</p>
      <p>{company}</p>
      <p>{date}</p>
      <p className={`status ${status}`}>{status}</p>
      <div className="action-div">
        <span
          className="icon-add"
          onClick={() => {
            navigate(`/edit/${_id}`);
            setEditJob(_id);
          }}
        >
          <MdOutlinePlaylistAdd />
        </span>
        <span className="icon-delete" onClick={() => deleteJob(_id)}>
          <MdDeleteForever />
        </span>
      </div>
    </article>
  );
};
export default SingleJobList;
