import React from "react";
import CardButtons from "../cardButtons/cardButtons";
import { Profile } from "../../../../types/types";

interface Props {
  profile: Profile;
}

const Card: React.FC<Props> = ({ profile }) => {
  return (
    <div className="main-page-card">
      <div className="main-page-card-general">
        <img
          className="object-fil h-10 rounded-full"
          src={profile.imageSrc}
          alt="profile"
        />
        <div className="main-page-card-general-info">
          <a href={profile.profileLink} target="_blank" rel="noreferrer">
            <div className="main-page-card-general-image">
              <span>{profile.name}</span>
            </div>
          </a>
          <div>{profile.createdAt.toString().slice(0, 10)}</div>
        </div>
      </div>
      <div className="main-page-card-position">{profile.position}</div>
      <div className="main-page-card-position-info">
        <div className="main-page-card-position-info-tags">
          {profile.tags.map((tag: string) => (
            <div key={tag}>
              <span>#</span>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <CardButtons profile={profile} />
    </div>
  );
};

export default Card;
