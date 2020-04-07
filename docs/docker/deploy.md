# 应用部署


## MySQL部署

案例：需求

`在Docker容器中部署MySQL，并通过外部mysql客户端操作MySQL Server`

案例：实现步骤

`1. 搜索镜像 2. 拉取镜像 3. 创建容器 4. 操作容器中的mysql`

遇到的问题：

- 容器内的网络服务和外部机器不能直接通信
- 外部机器和宿主机可以直接通信
- 宿主机和容器可以直接通信

解决方案：

- **当容器中的网络服务需要被外部机器访问时，可以将容器中提供服务的端口`映射`到宿主机的端口上。外部机器访问宿主机的该端口，从而间接访问容器的服务。**
- 这种操作称为：`端口映射`

<img :src="$withBase('/deploy.png')">

```bash
mkdir ~/mysql
cd ~/mysql

docker run -id \
-p 3307:3306 \
--name mysql_test \
-v $PWD/conf:/etc/mysql/conf.d \  # linux系统中pwd命令为查看当前路径 这里的$PWD类似
-v $PWD/logs:/logs \
-v $PWD/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
mysql:version
```


## Nginx部署

案例：需求

`在Docker容器中部署Nginx，并通过外部机器访问Nginx`

案例：实现步骤

`1.搜索镜像 2.拉去镜像 3.创建容器 4.测试访问`

```bash
mkdir ~/nginx
cd ~/nginx
mkdir conf
cd conf
# 在～/nginx/conf/下创建nginx.conf文件
vim nginx.conf

# 创建nginx容器...
```
