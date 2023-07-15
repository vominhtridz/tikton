import { Link } from 'react-router-dom';
import style from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import video2 from '..//..//img&video/video/girl_1.mp4';
import video4 from '..//..//img&video/video/money_1.mp4';
import video3 from '..//..//img&video/video/video_2.mp4';
import video1 from '..//..//img&video/video/video1.mp4';
import {
  faHeartCircleBolt,
  faMusic,
  faPlay,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import {
  faFlag,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import { useRef, useState } from 'react';

const cx = classNames.bind(style);
function Home() {
  let [num, setnum] = useState(0);
  const [primary, setprimary] = useState(false);
  const numHearts = useRef();
  const clasPrimary = cx('active-icon', {
    primary: primary,
  });
  const handlePrimary = (e) => {
    setprimary(!primary);
    if (!primary) {
      setnum(num + 1);
    } else {
      setnum(num - 1);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('header-account')}>
          <button className={cx('following')}>
            Follow
          </button>
          <Link to="@maihuong">
            <img
              className={cx('img')}
              src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/2c5cb360cd083c3aa96217a4d3b3964d~c5_100x100.jpeg?x-expires=1688968800&x-signature=ikhYCqYL%2FW%2FjevRckWKMKCWgKww%3D"
            />
          </Link>
          <div className={cx('information-user')}>
            <div className={cx('username')}>
              <a href="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/77d9485d6617544567ba881e2eadcef4~c5_100x100.jpeg?x-expires=1688371200&x-signature=UZskL1FEzt26xxm46ZPppF2HxwY%3D">
                h_chaukiuu
              </a>
              <span>Trần Huyền Châu</span>
            </div>
            <span>
              #DaNang Dự báo thười tiết hôm nay có nắng và
              có bụi
            </span>
            <a href="/music/nhạc-nền-Lê-Bảo-7236596805986716422">
              <FontAwesomeIcon
                icon={faMusic}
                className={cx('icon-music')}
              />
              Nhạc nền - Huỳnh Kiều
            </a>
          </div>
        </div>
        <div className={cx('user-account')}>
          {/* music  */}
          <div className={cx('video')}>
            <audio className={cx('music')} />
            <video
              preload="auto"
              src={video1}
              controls
              playsInline
              crossorigin="use-credentials"
              type="video/mp4"
            />

            {/* turn on & of music */}
            <FontAwesomeIcon icon={faSoundcloud} />
            {/* icon play and pause */}
            <div className={cx('play')}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className={cx('active')}>
            <div
              className={cx('heart')}
              onClick={handlePrimary}
            >
              <FontAwesomeIcon
                icon={faHeartCircleBolt}
                className={clasPrimary}
              />
              <span ref={numHearts}>{num}</span>
            </div>
            <div className={cx('comment')}>
              <FontAwesomeIcon
                icon={faMessage}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
            <div className={cx('like')}>
              <FontAwesomeIcon
                icon={faFlag}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
            <div className={cx('comment')}>
              <FontAwesomeIcon
                icon={faShare}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('header-account')}>
          <button className={cx('following')}>
            Follow
          </button>
          <Link to="@maihuong">
            <img
              className={cx('img')}
              src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/77d9485d6617544567ba881e2eadcef4~c5_100x100.jpeg?x-expires=1688371200&x-signature=UZskL1FEzt26xxm46ZPppF2HxwY%3D"
            />
          </Link>
          <div className={cx('information-user')}>
            <div className={cx('username')}>
              <a href="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/77d9485d6617544567ba881e2eadcef4~c5_100x100.jpeg?x-expires=1688371200&x-signature=UZskL1FEzt26xxm46ZPppF2HxwY%3D">
                bao_le
              </a>
              Lê Hoài Bảo
            </div>
            <span>#luadoi Dành cho người xứng đáng!</span>
            <a href="/music/nhạc-nền-Lê-Bảo-7236596805986716422">
              <FontAwesomeIcon
                icon={faMusic}
                className={cx('icon-music')}
              />
              Nhạc nền - Lê Bảo
            </a>
          </div>
        </div>
        <div className={cx('user-account')}>
          {/* music  */}
          <div className={cx('video')}>
            <audio className={cx('music')} />
            <video
              preload="auto"
              controls
              type="video/mp4"
              src={video4}
            />
            {/* turn on & of music */}
            <FontAwesomeIcon icon={faSoundcloud} />
            {/* icon play and pause */}
            <div className={cx('play')}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className={cx('active')}>
            <div
              className={cx('heart')}
              onClick={handlePrimary}
            >
              <FontAwesomeIcon
                icon={faHeartCircleBolt}
                className={clasPrimary}
              />
              <span>0</span>
            </div>
            <div className={cx('comment')}>
              <FontAwesomeIcon
                icon={faMessage}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
            <div className={cx('like')}>
              <FontAwesomeIcon
                icon={faFlag}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
            <div className={cx('comment')}>
              <FontAwesomeIcon
                icon={faShare}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('header-account')}>
          <button className={cx('following')}>
            Follow
          </button>
          <Link to="@maihuong">
            <img
              className={cx('img')}
              src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/839f6df0661ce442e0712cd47edd2a98~c5_100x100.jpeg?x-expires=1688961600&x-signature=4xnYxClNNL9CpLhJdiDSQg2fv0s%3D"
            />
          </Link>
          <div className={cx('information-user')}>
            <div className={cx('username')}>
              <a href="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/77d9485d6617544567ba881e2eadcef4~c5_100x100.jpeg?x-expires=1688371200&x-signature=UZskL1FEzt26xxm46ZPppF2HxwY%3D">
                ductien
              </a>
              Nguyễn Mai Đức Tiến
            </div>
            <span>#yeuem Đau lòng quá!</span>
            <a href="/music/nhạc-nền-Lê-Bảo-7236596805986716422">
              <FontAwesomeIcon
                icon={faMusic}
                className={cx('icon-music')}
              />
              Nhạc nền - Super Hero
            </a>
          </div>
        </div>
        <div className={cx('user-account')}>
          {/* music  */}
          <div className={cx('video')}>
            <audio className={cx('music')} />
            <video
              preload="auto"
              controls
              type="video/mp4"
              src={video3}
            />
            {/* turn on & of music */}
            <FontAwesomeIcon icon={faSoundcloud} />
            {/* icon play and pause */}
            <div className={cx('play')}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className={cx('active')}>
            <div
              className={cx('heart')}
              onClick={handlePrimary}
            >
              <FontAwesomeIcon
                icon={faHeartCircleBolt}
                className={clasPrimary}
              />
              <div
                dangerouslySetInnerHTML={{ __html: num }}
              ></div>
            </div>
            <div className={cx('comment')}>
              <FontAwesomeIcon
                icon={faMessage}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
            <div className={cx('like')}>
              <FontAwesomeIcon
                icon={faFlag}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
            <div className={cx('comment')}>
              <FontAwesomeIcon
                icon={faShare}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('header-account')}>
          <button className={cx('following')}>
            Follow
          </button>
          <Link to="@maihuong">
            <img
              className={cx('img')}
              src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/ea37ef8a15ff148e2a54be876f086024~c5_100x100.jpeg?x-expires=1688961600&x-signature=i8IhbTjJ4uNtrP9%2BtyCtIv6vDMo%3D"
            />
          </Link>
          <div className={cx('information-user')}>
            <div className={cx('username')}>
              <a href="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/77d9485d6617544567ba881e2eadcef4~c5_100x100.jpeg?x-expires=1688371200&x-signature=UZskL1FEzt26xxm46ZPppF2HxwY%3D">
                vanphuc
              </a>
              Thái Văn Phúc
            </div>
            <span>#xuhuong Nhớ em ngày đêm</span>
            <a href="/music/nhạc-nền-Lê-Bảo-7236596805986716422">
              <FontAwesomeIcon
                icon={faMusic}
                className={cx('icon-music')}
              />
              Nhạc nền - Lê Bảo
            </a>
          </div>
        </div>
        <div className={cx('user-account')}>
          {/* music  */}
          <div className={cx('video')}>
            <audio className={cx('music')} />
            <video
              preload="auto"
              controls
              type="video/mp4"
              src={video2}
            />
            {/* turn on & of music */}
            <FontAwesomeIcon icon={faSoundcloud} />
            {/* icon play and pause */}
            <div className={cx('play')}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <div className={cx('active')}>
            <div
              className={cx('heart')}
              onClick={handlePrimary}
            >
              <FontAwesomeIcon
                icon={faHeartCircleBolt}
                className={clasPrimary}
              />
              <span>0</span>
            </div>
            <div className={cx('comment')}>
              <FontAwesomeIcon
                icon={faMessage}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
            <div className={cx('like')}>
              <FontAwesomeIcon
                icon={faFlag}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
            <div className={cx('comment')}>
              <FontAwesomeIcon
                icon={faShare}
                className={cx('active-icon')}
              />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
