# Docker 命令


## 服务相关命令

```bash
# 启动docker服务
systemctl start docker

# 停止docker服务
systemctl stop docker

# 重启docker服务
systemctl restart docker

# 查看docker服务状态
systemctl status docker

# 设置开机启动docker
systemctl enable docker
```


## 镜像相关命令

```bash
# 查看镜像
docker images

# 查看所有镜像的id
docker images -q

# 搜索镜像
docker search [image name]

# 拉取镜像
docker pull [image name]:version

# 删除镜像
docker rmi [image name/id]

# 删除所有镜像
docker rmi `docker images -q`
```


## 容器相关命令

```bash
# 创建容器
docker run 参数

#参数说明:
#  -i 保持容器运行。通常与-t同时使用。加入it这两个参数后，容器创建后自动进入容器中，退出容器后，容器自动关闭。
#  -t 为容器重新分配一个伪输入终端，通常与-i同时使用。
#  -d 以守护(后台)模式运行容器。创建一个容器在后台运行，需要使用docker exec进入容器。退出后，容器不会关闭。
#  -it 创建的容器一般称为交互式容器，-id 创建的容器一般被称为守护式容器。
#  -name 为创建的容器命名。

# 查看容器
docker ps     # 运行中的容器
docker ps -a  # 所有容器
docker ps -qs # 所有容器id

# 查看容器信息
docker inspect [container name/id]

# 启动容器
docker start [container name/id]

# 停止容器
docker stop [container name/id]

# 删除容器
docker rm [container name/id]
docker rm `docker ps -aq`      # 删除所有容器
```
