import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../helpers/generalHelper";

const CommentsComponent = ({
  comments,
  margin = 0,
  completComments,
  commentInput,
  setCommentInput,
  setAllComments,
  allComments,
  commentSubmission,
}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {comments &&
        comments.map((comment) => {
          return (
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-2" style={{ marginLeft: margin }}>
                  <div class="p-2 lg:w-2/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          {comment?.email}
                        </h2>
                        <p class="text-gray-500">{comment?.comment}</p>
                      </div>
                      <input
                        placeholder={`Reply To ${comment?.email}`}
                        value={commentInput[comment?.uuid]}
                        onChange={(e) => {
                          commentInput[comment?.uuid] = e.target.value;
                          setCommentInput({ ...commentInput });
                        }}
                      />
                      <button
                        onClick={() => {
                          comment?.children?.unshift({
                            uuid: Date.now().toString(),
                            email: user?.email,
                            comment: commentInput[comment?.uuid],
                            isARelpyTo: comment?.uuid,
                            children: [],
                          });

                          setAllComments([...allComments]);
                          commentSubmission({
                            email: user?.email,
                            comment: commentInput[comment?.uuid],
                            isARelpyTo: comment?.uuid,
                          });
                        }}
                      >
                        Add
                      </button>
                    </div>
                    {comment?.children?.length ? (
                      <CommentsComponent
                        comments={comment?.children}
                        margin={"30px"}
                        completComments={completComments}
                        commentInput={commentInput}
                        setCommentInput={setCommentInput}
                        setAllComments={setAllComments}
                        allComments={allComments}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
    </>
  );
};

const CommentModal = ({ addEventMetaData, onAddEventFormClose }) => {
  const [allComments, setAllComments] = useState([]);
  const [commentInput, setCommentInput] = useState({});
  const [completComments, setCompleteComments] = useState([]);

  const getNestedCommentsUserInterface = (globalComments = []) => {
    const parentCommnts = globalComments.filter(
      (comment) => !comment.isARelpyTo
    );

    const getRecurssiveComments = (recurrComment) => {
      let completeCommentObj = [];
      recurrComment.forEach((comment) => {
        const foundChildComments = globalComments.filter(
          (comm) => comm.isARelpyTo === comment.uuid
        );

        completeCommentObj.push({
          ...comment,
          children: getRecurssiveComments(foundChildComments),
        });
      });
      return completeCommentObj;
    };
    return getRecurssiveComments(parentCommnts);
  };

  const commentSubmission = async (comment) => {
    try {
      const { data } = await axios.put(
        `${backendUrl}/api/v1/events/update/${addEventMetaData?._id}`,
        { comment }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAllComments(getNestedCommentsUserInterface(addEventMetaData?.comments));
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        width: "100%",
        height: "200%",
        position: "absolute",
        top: 0,
        backgroundColor: "white",
        zIndex: "10000",
      }}
    >
      {/* Cross Button */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
          style={{ margin: "5px", cursor: "pointer" }}
          onClick={onAddEventFormClose}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>

      <div class="mb-3  d-flex justify-content-center">
        <div>
          <div className="mb-2">
            <img
              src={addEventMetaData.image}
              alt=""
              style={{ height: "50%" }}
            />
            <h2> {addEventMetaData.title}</h2>
          </div>
          <input
            type="text"
            class="form-control w-100 mb-1"
            id="exampleFormControlInput1"
            placeholder="Add A Comment"
            value={commentInput[1234456]}
            onChange={(e) => {
              commentInput[1234456] = e.target.value;
              setCommentInput({ ...commentInput });
            }}
          />
          <button
            className="btn "
            style={{ backgroundColor: "#574084", color: "white" }}
            onClick={() => {
              allComments?.unshift({
                uuid: Date.now().toString(),
                email: user?.email,
                comment: commentInput[1234456],
                isARelpyTo: null,
                children: [],
              });

              setAllComments([...allComments]);

              commentSubmission({
                email: user?.email,
                comment: commentInput[1234456],
                isARelpyTo: null,
              });
            }}
          >
            Click
          </button>
        </div>
      </div>

      {/* Parent Comment */}

      <CommentsComponent
        comments={allComments}
        color="black"
        completComments={completComments}
        commentInput={commentInput}
        setCommentInput={setCommentInput}
        setAllComments={setAllComments}
        allComments={allComments}
        commentSubmission={commentSubmission}
      />
    </div>
  );
};

export default CommentModal;
