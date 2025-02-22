import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
export default function SingleBlogPost({ post }) {
	return (
		<div className="single-news-card wow fadeInUp">
			<div className="news-thumb bg-cover" style={{ backgroundImage: `url(/img/blog/${post.img})` }}></div>
			<div className="contents">
				<div className="post-meta d-flex">
					<div className="post-cat">
						<Link href="/projects">
							<a>{post.category}</a>
						</Link>
					</div>
					<div className="post-date">
						<span>{post.date}</span>
					</div>
				</div>
				<h4>
					<Link href="/projects">
						<a>{post.title}</a>
					</Link>
				</h4>
				<p> {post.content} ...</p>

				<Link href="/projects">
					<a className="read-more-link">
						Meer Lezen <BsArrowRight color="#5B7486" size={18} />
					</a>
				</Link>
			</div>
		</div>
	);
}
