import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import type { TeamMember } from '../../data/team';
import styles from './TeamCard.module.css';

interface Props { member: TeamMember; }

const TeamCard = ({ member }: Props) => (
  <div className={styles.card}>
    <div className={styles.avatarWrap}>
      <img src={member.avatar} alt={member.name} className={styles.avatar} />
      <div className={styles.socialOverlay}>
        <a href={member.linkedin} className={styles.socialBtn} aria-label={`${member.name} LinkedIn`}>
          <FaLinkedin />
        </a>
        <a href={member.twitter} className={styles.socialBtn} aria-label={`${member.name} Twitter`}>
          <FaTwitter />
        </a>
      </div>
    </div>
    <div className={styles.info}>
      <h3 className={styles.name}>{member.name}</h3>
      <span className={styles.role}>{member.role}</span>
      <p className={styles.bio}>{member.bio}</p>
    </div>
  </div>
);

export default TeamCard;
