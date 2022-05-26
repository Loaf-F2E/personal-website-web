# personal-website-web

## technology stack(技术栈)

vue3.2 + vite + pinia + Ant Design Vue

markdown

1. `https://markdoc.io/`
2. `https://github.com/hinesboy/mavonEditor`

## 功能

### 个人博客功能

#### System role(系统角色)

| role(角色)    | permissions(权限)      |
| ------------- | ---------------------- |
| admin(管理员) | administrator(管理员)  |
| user(用户)    | write&read(读和写评论) |
| visitor(访客) | read(只读)             |

#### blog (帖子)

| params     | description     |
| ---------- | --------------- |
| tag        | 可根据 tag 分类 |
| title      | 标题            |
| content    | markdown 内容   |
| createTime | 创建时间        |
| updateTime | 更新时间        |
| author     | 作者            |

## 会议纪要 Minutes of meeting

1. 2022.05.21

确定 1.0.0 要做的功能，用户管理、用户登录、博客功能

用户管理、
pinia 用户登录

博客功能
markdown(锚点)
