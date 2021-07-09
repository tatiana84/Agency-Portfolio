const ServicePost = ({post}) => {

    return (
        <div class="col-md-4">
            <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class={post.icon}></i>
            </span>
            <h4 class="my-3">{post.title}</h4>
            <p class="text-muted">{post.content}</p>
        </div>
    )
}

export default ServicePost;