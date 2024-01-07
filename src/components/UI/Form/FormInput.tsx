'use client';

import { Input } from '@nextui-org/react';
import EyeClosedImg from '@public/eye-closed.svg';
import EyeOpenImg from '@public/eye-open.svg';
import Image from "next/image";
import { useState } from "react";

type FormInputProps = {
  type?: string
  name: string
  size?: 'lg' | 'md' | 'sm'
  startImage?: {
    src: string
    alt: string
  }
  endImage?: {
    src: string
    alt: string
  }
  isInvalid?: boolean
  errorMessage?: string
  isPasswordInput?: boolean
  placeholder?: string
}

export function FormInput({ type = 'text', name, size='sm', startImage, endImage, errorMessage, isInvalid, isPasswordInput, placeholder }: Readonly<FormInputProps>) {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const toggleVisibility = () => setIsVisiblePassword(!isVisiblePassword);

    const startContent = startImage ? (
      <Image 
        alt={startImage.alt} 
        src={startImage.src} 
        width={18} 
        height={18}
      />
    )
    : null

    const endContent = endImage ? (
      <Image 
        alt={endImage.alt} 
        src={endImage.src} 
        width={18} 
        height={18}
      />
    )
    : null

    const passwordIconEye = (
      <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
      {isVisiblePassword ? (
        <Image src={EyeOpenImg} alt="eye opened" width={18} height={18}/> 
      ) : (
        <Image src={EyeClosedImg} alt="eye closed" width={18} height={18}/> 
      )}
    </button>
    )


    return (
        <Input 
          type={isPasswordInput ? isVisiblePassword ? "text" : "password" : type}
          placeholder={isPasswordInput ? '***********'  : placeholder}
          size={size}
          name={name}
          startContent={startContent}
          endContent={isPasswordInput ? passwordIconEye : endContent}
          isInvalid={isInvalid}
          errorMessage={errorMessage}
      />
    )
}