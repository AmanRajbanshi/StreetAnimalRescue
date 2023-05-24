const getNestedCommentsUserInterface = (globalComments = []) => {
  const parentCommnts = globalComments.filter((comment) => !comment.isARelpyTo);

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
export const backendUrl = "https://street-animal-rescue.onrender.com";
