interface AlertElements {
    Primary: (props: any) => JSX.Element;
    Secondary: (props: any) => JSX.Element;
    Success: (props: any) => JSX.Element;
    Info: (props: any) => JSX.Element;
    Warning: (props: any) => JSX.Element;
    Error: (props: any) => JSX.Element;
    Light: (props: any) => JSX.Element;
    Icon: (props: any) => JSX.Element;
}

interface HeaderProps {
    title: string;
    option: Array[][];
}

const Wux: {
    Basic: (props: any) => JSX.Element;
    Header: (props: HeaderProps) => JSX.Element,
    Col: (props: any) => JSX.Element;
    /**Alert elements */
    Alert: AlertElements;
}

export default Wux;