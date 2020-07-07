<template>
    <div class="login">
        <div class="log-head">
            <img src="../assets/qiling-logo-white.png" alt="">
            <div class="lolg-head-right">
                <ul>
                    <li><a href="javascript:;">首页</a></li>
                    <li><a href="javascript:;">免费注册</a></li>
                    <li><a href="javascript:;">忘记密码</a></li>
                    <li><a href="javascript:;">麒麟社区</a></li>
                </ul>
            </div>
        </div>
        <div class="login-content">
            <div class="login-content-left">
                <h1>麒 麟 云 与 企 业 深 度 融 合 <br>
                    创 造 数 字 化 未 来</h1>
                    <ul>
                <li>完整的电商框架体系</li>
                <li>多种行业定制解决方案</li>
                <li>智能多样的课程学习</li>
                <li>高效的大数据分析和处理能力</li>
                <li>人工智能向全局智能持续演进</li>
            </ul>
            <div class="main">
                <h1 class="message">用户界面</h1>
                <h1 class="password">验证码登录</h1>
                <form action="" :model="loginfrom">
                    <input type="text" class="text" placeholder="账号/手机号">
                    <input type="password" class="passwords" placeholder='请输入密码'>
                    <button class="notes">登录</button>
                </form>
                <div class="links">
                    <a href="" class="forget">忘记密码</a>
                    <a href="" class="register">免费注册</a>
                </div>
            </div>
            </div>
        </div>
        <div class="login-bottom">
            <ul>
                <li><a href="javascript:;">浙江国贸</a></li>
                <li><a href="javascript:;">国贸云商</a></li>
                <li><a href="javascript:;">五洲普华</a></li>
                <li><a href="javascript:;">四海商舟</a></li>
                <li><a href="javascript:;">畅销天下</a></li>
                <li><a href="javascript:;">畅购天下</a></li>
                <li><a href="javascript:;">魔方云仓</a></li>
                <li><a href="javascript:;">PingPong</a></li>
                <li><a href="javascript:;">温州中津先进科技研究院</a></li>
                <li><a href="javascript:;">阿里云</a></li>
                <li><a href="javascript:;">雨果网</a></li>
                <li><a href="javascript:;">顺丰速运</a></li>
                <li><a href="javascript:;">递四方</a></li>
                <li><a href="javascript:;">佳成国际</a></li>
                <li><a href="javascript:;">鼎辉知产</a></li>
                <li><a href="javascript:;">百世国际</a></li>
                <li><a href="javascript:;">日晟国际</a></li>
                <li><a href="javascript:;">欧洲海外仓</a></li>
            </ul>
            <p class="copyright">Copyright © 2019 ZHEJIANG GM DIGITAL TECHNOLOGY CO.,LTD. All Rights Reserved. 浙江国贸数字科技有限公司 版权所有 浙ICP备19021220号</p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
li{
    list-style: none;
}
a{
    text-decoration: none;
}
.login{
    // height: 100%;
    background: url(../assets/bule-bottom.jpg) no-repeat center;
    background-attachment :fixed;
    .log-head{
        height: 60px;
        border-bottom: 1px solid rgba(255,255,255,.3);
        img{
            height: 36px;
            padding: 12px 20px;
        }
        .lolg-head-right{
            float: right;
            font-size: 14px;
            line-height: 32px;
            li{
                float: left;
                padding: 0 15px;
                a{
                    color: #ffff;
                }
            }
        }
    }
    .login-content{
        height: 800px;
        margin-top: 180px;
        .login-content-left{
            color: #ffff;
            margin-left: 50px;
            h1{
                font-size: 56px;
            }
            li{
                position: relative;
                 float: left;
                 padding: 40px;
                 font-size: 16px;
                 width: 35%;
            }
            li:before{
                content: '';
                position: absolute;
                top: 42px;
                left: 0;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: #fff;
            }
        }
        .main{
            position: absolute;
            right: 40px;
            top: 240px;
            width: 380px;
            height: 380px;
            background-color: #fff;
            .message,.password{
                float: left;
                color: #000;
                font-size: 18px;
                width: 50%;
                height: 36px;
                font-weight: normal;
                text-align: center;
                border-bottom: 2px solid rgb(0, 153, 176);
                cursor:pointer;
            }
            .text,.passwords{
                width: 300px;
                height: 35px;
                outline:medium;
                border: 1px solid #ccc;
                margin: 10px 30px;
                padding-left: 10px;
            }
            .notes{
                margin-top: 40px;
                width: 314px;
                height: 35px;
                background-color: #00c1de;
                margin-left: 30px;
                margin-right: 30px;
                border: 0;
                cursor:pointer;
            }
            .forget,.register{
            color: #333333;
            font-size: 14px;
            padding-left: 5px;
        }
        .links{
            text-align: center;
            margin-top: 30px;
        }
        }
    }
    .login-bottom{
        position: relative;
        height: 150px;
        background-color: #2e3033;
        padding-left: 200px;
       ul{
           padding: 20px 0;
            li{
            float: left;
            font-size: 12px;
            margin: 0 10px;
            min-width: 100px;
            a{
                color: #fff;
            }
        }
       }
        .copyright{
            position: absolute;
            left: 400px;
            bottom: 0;
            font-size: 12px;
            color: #999999;
        }
    }
}

</style>
