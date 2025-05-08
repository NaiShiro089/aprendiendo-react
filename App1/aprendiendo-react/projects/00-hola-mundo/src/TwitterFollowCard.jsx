import { useState } from "react";

export function TwitterFollowCard({ userName, tagName }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const text = isFollowing ? (isHovering ? "Unfollow" : "Following") : "Follow";

  const buttonClassname = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-header-img"
          alt="Gura's Shrimp"
          src={`https://unavatar.io/x/${tagName}`}
        />
        <div className="tw-follow-card-info">
          <strong className="tw-follow-card-username">{userName}</strong>
          <span className="tw-follow-card-tagname">@{tagName}</span>
        </div>
      </header>

      <aside className="tw-follow-card-aside-button">
        <button
          className={buttonClassname}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </button>
      </aside>
    </article>
  );
}
