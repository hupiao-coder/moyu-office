"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, useDisclosure } from "@nextui-org/react";
import { Sentence } from "../definitions";

export default function ShareModal({ sentence }: { sentence: Sentence }) {

    // 定义弹出框
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    // 下载图片
    const handleDownload = async () => {
        // 这是图片的 URL，可以替换成你自己的图片 URL
        const imageUrl = sentence.fenxiang_img;
        try {
            // 图片的 URL
            const response = await fetch(imageUrl);
            // 将响应转换为 Blob 对象
            const blob = await response.blob();

            // 创建一个临时 URL
            const blobUrl = URL.createObjectURL(blob);

            // 创建 a 标签下载
            const link = document.createElement('a');
            link.href = blobUrl;
            // 设置下载时的文件名
            link.download = `摸鱼办-每日一句-${sentence.dateline}.png`;
            // 把链接加入到 DOM 中
            document.body.appendChild(link);
            // 模拟点击下载
            link.click();
            // 清理，下载后移除链接
            document.body.removeChild(link);
            // 释放内存
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            alert('下载失败！');
        }
      };

    return (
        <>
            <Button className="text-white" color="primary" radius="full" size="md" onPress={onOpen}>分享</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                        <Image src={ sentence.fenxiang_img } radius="none" alt={ sentence.note } className="z-0 w-full h-full scale-100 -translate-y-6 object-cover" />
                        <ModalFooter className="pt-0">
                            <Button color="danger" variant="light" onPress={onClose}>关闭</Button>
                            <Button color="primary" className="text-white" onPress={handleDownload}>下载</Button>
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}