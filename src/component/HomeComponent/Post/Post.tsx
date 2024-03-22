import classNames from "classnames/bind";
import styles from './Post.module.scss'
import { useGetPostQuery } from "../../../redux/blog.service";
import PostCard from "./PostCard/PostCard";


const cx = classNames.bind(styles)
function Post() {
    const { data } = useGetPostQuery()
    const postList = data?.slice(0, 8)
    return (
        <div className={cx("container")}>
            <div className={cx("title")}>
                Bất động sản dành cho bạn
            </div>
            <div className={cx("wrapper")}>
                {postList?.map(item => (
                    <PostCard key={item.id} posts={item} />
                ))}
            </div>
            <div className={cx("more")}>
                <button className={cx("btn")}>
                    <a className={cx("btn-tx")}>
                        Xem Thêm
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Post;