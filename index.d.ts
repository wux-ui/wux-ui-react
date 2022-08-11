import React from 'react';

type AlertTypes =
    'primary' |
    'secondary' |
    'success' |
    'info' |
    'warning' |
    'error' |
    'light' |
    'icon';

type ButtonTypes =
    'primary' |
    'secondary' |
    'success' |
    'info' |
    'warning' |
    'error' |
    'light' |
    'outline' |
    'text' |
    'xs' |
    'sm' |
    'md' |
    'lg' |
    'xl' |
    'square' |
    'default' |
    'solid' |
    'round' |
    'block' |
    'active';

type ButtonGroupTypes =
    'xs' |
    'sm' |
    'md' |
    'lg' |
    'xl';

type RowSizes =
    'xs' |
    'sm' |
    'md' |
    'lg' |
    'xl';

type RowNumbers =
    '1' |
    '2' |
    '3' |
    '4' |
    '5' |
    '6' |
    '7' |
    '8' |
    '9' |
    '10' |
    '11' |
    '12';

type InputSizes =
    'xs' |
    'sm' |
    'md' |
    'lg' |
    'xl';

type ListTypes =
    'action' |
    'focus';

type TooltipTypes =
    'top' |
    'bottom' |
    'right' |
    'left';

type TagTypes =
    'warning' |
    'error' |
    'close';


type HeaderOption = [
    string,
    string,
    boolean | undefined,
]

type JumbotronBtn = [
    string,
    JSX.Element,
    React.AllHTMLAttributes<T> | undefined,
]

interface HeaderProps {
    /**a string as the title */
    title: string;
    /**an array and links each item of the array to the second item displayed on the right with the first item as the title */
    option?: HeaderOption[];
}

interface AlertProps {
    type: AlertTypes;
}

interface ButtonProps extends React.ButtonHTMLAttributes<T> {
    type: ButtonTypes | ButtonTypes[];
}

interface ButtonGroupProps extends React.HTMLAttributes<T> {
    type: ButtonGroupTypes | ButtonGroupTypes[];
}

interface RowProps {
    size: RowSizes | RowSizes[];
    number: RowNumbers | RowNumbers[];
}

interface BreadcrumbProps {
    item: string | string[];
}

interface CardProps {
    header: JSX.Element;
    body: string | JSX.Element;
    footer: JSX.Element;
}

interface DialogProps extends React.DialogHTMLAttributes<T> {
    id: string;
    header: string;
    body: string | JSX.Element;
    cancel: JSX.Element;
    footer: JSX.Element;
}

interface DropdownProps {
    menu: string[];
}

interface InputProps {
    size: InputSizes;
    disabled?: boolean;
}

interface RadioProps extends React.InputHTMLAttributes<T> {
    suffix?: string | JSX.Element;
    children: string[];
}

interface SelectProps extends React.SelectHTMLAttributes<T> {
    value?: string;
    children: string[];
}

interface LoadingButtonProps extends React.ButtonHTMLAttributes<T> {
    type: 'button';
}

interface LoadingSpanProps extends React.HTMLAttributes<T> {
    type: 'span';
}

interface JumbotronProps {
    title: string | JSX.Element;
    subtitle?: string | JSX.Element;
    btn?: JumbotronBtn[];
}

interface ListProps extends React.HTMLAttributes<T> {
    type: ListTypes[] | ListTypes[][];
    children: string[];
}

interface ProgressProps extends React.ProgressHTMLAttributes<T> {
    value: string | number;
    max: string | number;
}

interface TooltipProps extends React.ButtonHTMLAttributes<T> {
    btn?: JSX.Element;
    type: TooltipTypes;
    text: string;
}

interface TableProps extends React.TableHTMLAttributes<T> {
    children: object;
}

interface TagProps extends React.HTMLAttributes<T> {
    type: TagTypes | TagTypes[];
}

interface BadgeProps extends React.HTMLAttributes<T> { }

interface TabProps extends React.HTMLAttributes<T> {
    name: string[];
    children: string[] | JSX.Element[];
}

const WuX: {
    /**Header fixed margin */
    HeaderMargin: (props: any) => JSX.Element;
    /**Header element  
     *   
     * The parameter `props` should be an object with `title` and `option` as properties  
     * `title` is a string as the title  
     * `option` is an array and links each item of the array to the second item displayed on the right with the first item as the title  
     *   
     * This is an example of a Header element :
     * ```js
     * <Wux.Header
     *     title='WuX-UI Debug Page'
     *     option={[
     *         ['Offical Page', 'https://wux-ui.tk/'],
     *         ['Github', 'https://github.com/wux-ui/wux-ui']
     *     ]}
     * />
     * ```
     * 
     * @param {HeaderProps} props an object with `title` and `option` as properties
     */
    Header: (props: HeaderProps) => JSX.Element;
    /**Container element */
    Container: (props: any) => JSX.Element;
    /**Row element
     *   
     * The parameter `props` should be an object with `size` and `number` as properties  
     * `size` and `number` should be two strings or two arrays of the same length  
     * `number` must be a string between 1 and 12 or an array of strings between 1 and 12
     *   
     * These are two examples of the Row element :
     * ```js
     * //string
     * <WuX.Row size='md' number='2'></WuX.Row>
     * //array
     * <WuX.Row size={['md', 'sm']} number={['4', '2']}></WuX.Row>
     * ```
     * 
     * @param {RowProps} props an object with `size` and `number` as properties
     */
    Row: (props: RowProps) => JSX.Element;
    /**Col element */
    Col: (props: any) => JSX.Element;
    /**Alert element
     *   
     * The parameter `props` should be an object with `type` as property  
     * `type` is a string
     *   
     * This is an example of a Alert element :
     * ```js
     * <WuX.Alert type='primary'>Primary</WuX.Alert>
     * ```
     * 
     * @param {AlertProps} props an object with `type` as property
     */
    Alert: (props: AlertProps) => JSX.Element;
    /**Button element
     *   
     * The parameter `props` should be an object with `type` as property  
     * `type` is a string
     *   
     * This is an example of a Button element :
     * ```js
     * <WuX.Button type='primary'>Primary</WuX.Button>
     * ```
     * 
     * @param {ButtonProps} props an object with `type` as property
     */
    Button: (props: ButtonProps) => JSX.Element;
    /**ButtonGroup element */
    ButtonGroup: (props: ButtonGroupProps) => JSX.Element;
    /**Breadcrumb element
     *   
     * The parameter `props` should be an object with `item` as property  
     * `item` is a string or array
     *   
     * This is an example of a Breadcrumb element :
     * ```js
     * <WuX.Breadcrumb item={['Home', 'Explore', 'Download', 'About']} />
     * ```
     * 
     * @param {BreadcrumbProps} props an object with `item` as property
     */
    Breadcrumb: (props: BreadcrumbProps) => JSX.Element;
    /**Card element
     *   
     * The parameter `props` should be an object with `header` , `body` and `footer` as properties  
     * `header` and `footer` is a JSX element
     * `body` is a string or a JSX element
     *   
     * This is an example of a Card element :
     * ```js
     * 
     * <WuX.Card
     *     header={<img src="https://image.moeblog.gq/i/2022/07/16/nsdzkk.svg" alt='card img' />}
     *     body='Hello'
     *     footer={<>
     *         <WuX.Button type={['primary', 'text']}>Test</WuX.Button>
     *         <WuX.Button type={['secondary', 'text']}>Test</WuX.Button>
     *     </>}
     * />
     * ```
     * 
     * @param {CardProps} props an object with `header` , `body` and `footer` as properties
      */
    Card: (props: CardProps) => JSX.Element;
    /**Dialog element */
    Dialog: (props: DialogProps) => JSX.Element;
    /**Dropdown element */
    Dropdown: (props: DropdownProps) => JSX.Element;
    /**Input element */
    Input: (props: InputProps) => JSX.Element;
    /**Textarea element */
    Textarea: (props: React.TextareaHTMLAttributes<T>) => JSX.Element;
    /**Check element */
    Check: (props: React.InputHTMLAttributes<T>) => JSX.Element;
    /**Radio element */
    Radio: (props: RadioProps) => JSX.Element;
    /**Range element */
    Range: (props: React.InputHTMLAttributes<T>) => JSX.Element;
    /**Select element */
    Select: (props: SelectProps) => JSX.Element;
    /**Upload element */
    Upload: (props: React.InputHTMLAttributes<T>) => JSX.Element;
    /**Loading element */
    Loading: (props: LoadingButtonProps | LoadingSpanProps) => JSX.Element;
    /**Jumbotron element */
    Jumbotron: (props: JumbotronProps) => JSX.Element;
    /**List element */
    List: (props: ListProps) => JSX.Element;
    /**Progress element */
    Progress: (props: ProgressProps) => JSX.Element;
    /**Tooltip element */
    Tooltip: (props: TooltipProps) => JSX.Element;
    /**Table element */
    Table: (props: TableProps) => JSX.Element;
    /**Tag element */
    Tag: (props: TagProps) => JSX.Element;
    /**Badge element */
    Badge: (props: BadgeProps) => JSX.Element;
    /**Search element */
    Search: (props: React.InputHTMLAttributes<T>) => JSX.Element;
    /**Tab element */
    Tab: (props: TabProps) => JSX.Element;
}

export default WuX;