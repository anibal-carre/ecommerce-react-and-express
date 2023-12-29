import StarEmptyIcon from "../components/icons/StarEmptyIcon";
import StarIcon from "../components/icons/StarIcon";

const Rank = ({ rank }) => {
  return (
    <div className="flex items-center gap-1 text-yellow-500 text-[18px] mb-5">
      {rank == 0 ? (
        <>
          <StarEmptyIcon />
          <StarEmptyIcon />
          <StarEmptyIcon />
          <StarEmptyIcon />
          <StarEmptyIcon />
        </>
      ) : (
        ""
      )}

      {rank == 1 ? (
        <>
          <StarIcon />
          <StarEmptyIcon />
          <StarEmptyIcon />
          <StarEmptyIcon />
          <StarEmptyIcon />
        </>
      ) : (
        ""
      )}

      {rank == 2 ? (
        <>
          <StarIcon />
          <StarIcon />
          <StarEmptyIcon />
          <StarEmptyIcon />
          <StarEmptyIcon />
        </>
      ) : (
        ""
      )}

      {rank == 3 ? (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarEmptyIcon />
          <StarEmptyIcon />
        </>
      ) : (
        ""
      )}

      {rank == 4 ? (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarEmptyIcon />
        </>
      ) : (
        ""
      )}

      {rank == 5 ? (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      ) : (
        ""
      )}

      <span className="text-[18px] font-[500]">{rank}</span>
    </div>
  );
};

export default Rank;
