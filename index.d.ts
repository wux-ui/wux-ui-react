interface AlertElements {
    /**Primary alert */
    Primary: (props: any) => JSX.Element;
    /**Secondary alert */
    Secondary: (props: any) => JSX.Element;
    /**Success alert */
    Success: (props: any) => JSX.Element;
    /**Info alert */
    Info: (props: any) => JSX.Element;
    /**Warning alert */
    Warning: (props: any) => JSX.Element;
    /**Error alert */
    Error: (props: any) => JSX.Element;
    /**Light alert */
    Light: (props: any) => JSX.Element;
    /**Icon alert */
    Icon: (props: any) => JSX.Element;
}



interface HeaderProps {
    /**a string show as title  */
    title: string;
    /**an Array with Array(string)  
     * `string[0]` is the link title  
     * `string[1]` is the link */
    option?: string[][];
}

const Wux: {
    /**Basic element */
    Basic: (props: any) => JSX.Element;
    /**Header element  
     *   
     * The param `props` should be an object with `title` and `option` as properties  
     * `title` is a string show as title  
     * `option` is an Array with Array(string), `string[0]` is the link title, `string[1]` is the link  
     *   
     * This is a Header element template :
     * ```js
     * <Wux.Header
     *     title="WuX-UI Debug Page"
     *     option={[
     *         ['Offical Page', 'https://wux-ui.tk/'],
     *         ['Github', 'https://github.com/wux-ui/wux-ui']
     *     ]}
     * />
     * ```
     */
    Header: (props: HeaderProps) => JSX.Element,
    /**Col element */
    Col: (props: any) => JSX.Element;
    /**Alert elements */
    Alert: AlertElements;
}

export default Wux;