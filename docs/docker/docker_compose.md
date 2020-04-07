# Docker Compose


## 概念

:::tip 服务编排
按照一定的业务规则批量管理容器。
:::

Docker Compose是一个编排多容器分布式部署的工具，提供命令集管理容器化应用的完整开发周期，包括服务构建，启动和停止:

1. 利用`Dockerfile`定义运行环境镜像
2. 使用`docker-compose.yml`定义组成应用的各服务
3. 运行`docker-compose up`启动应用

![docker-compose](/docker-compose.png)


## 安装

[官方文档](https://docs.docker.com/compose/install/)

```bash
# 下载docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 给予执行权限
sudo chmod +x /usr/local/bin/docker-compose

# 测试命令
docker-compose --version
```
