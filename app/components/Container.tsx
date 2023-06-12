
'use client'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[
      max-w-[250]
      max-auto
      xl:px-20
      md:px-q0
      sm:px-2
      px-4

  ]">{children}</div>
}

export default Container
