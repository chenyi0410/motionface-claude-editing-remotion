# 实际验证

验证日期：2026-10-02（Asia/Shanghai）。

- `npm install` 成功，依赖版本由 `package-lock.json` 固定。
- `npm run typecheck` 成功，TypeScript 无错误。
- `npm run still -- --log=error` 成功，检查第 420 帧（14 秒）构图、中文字体、手机、角色、文本轨与波形。
- `npm run render -- --concurrency=4 --log=error` 成功，完整渲染 902 帧。
- ffprobe 确认：H.264、1280×720、30 fps、902 个视频帧，AAC 音轨。MP4 容器时长 30.080 秒，视频时间线 30.067 秒；容器差异来自音频编码帧。
- `ffmpeg -i out/editing-story.mp4 -f null -` 完整解码成功，无解码错误。
- 检查渲染结果每 2 秒的接触表，覆盖导入、转场、文字、参数、导出和收尾。
- 本地渲染文件约 10.2 MB，渲染输出目录通过 `.gitignore` 排除。

本记录证明源码可运行并产出完整视频，不代表与参考片逐像素相同。参考视频与签名地址没有进入仓库。

## GitHub 与 Motionface

- 仓库：`https://github.com/chenyi0410/motionface-claude-editing-remotion`。
- GitHub 返回 `visibility: PUBLIC`，默认分支 `main`。
- 推送后通过 `git ls-remote origin refs/heads/main` 核对远端与本地提交一致。
- 对该片段的 repository REST 接口执行一次 POST，返回 HTTP 200。
- 响应的 `recording_id` 为 `e3ee409a-50f7-4b4a-af27-288226e47a57`，`github_url` 为上述仓库根地址；两项均与目标一致。
- 未调用任何删除或解绑接口。
- 凭证与签名地址扫描通过；仓库只包含源码、锁文件、文档、预览图与提取音轨。
