FROM nginx:1.17.4-alpine
MAINTAINER unizone.tech
LABEL orgnization="unizone corp" version=1.0
# 删除nginx 默认配置
RUN rm /etc/nginx/conf.d/default.conf
# 添加配置default.conf
ADD default.conf /etc/nginx/conf.d/
# 生成dist文件夹下的文件copy到nginx下面去
COPY dist /usr/share/nginx/html/dashboard/
EXPOSE 8080 8081
RUN echo "https://mirrors.aliyun.com/alpine/v3.8/main/" >/etc/apk/repositories && echo "https://mirrors.aliyun.com/alpine/v3.8/community/" >>/etc/apk/repositories && apk add --no-cache tzdata && echo 'Asia/Shanghai' >/etc/timezone  && echo 'Asia/Shanghai' > /etc/timezone && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
