import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtActivityIndicatorProps } from 'types/activity-indicator'

import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'

import AtComponent from '../../common/component'
import AtLoading from '../loading/index'

export default class AtActivityIndicator extends AtComponent<AtActivityIndicatorProps> {
  public static defaultProps: AtActivityIndicatorProps
  public static propTypes: InferProps<AtActivityIndicatorProps>

  public render (): JSX.Element {
    const { color, size, mode, content } = this.props

    const rootClass = classNames(
      'at-activity-indicator',
      {
        'at-activity-indicator--center': mode === 'center'
      },
      this.props.className
    )

    return (
      <View className={rootClass}>
        <View className='at-activity-indicator__body'>
          <AtLoading size={size} color={color} />
        </View>
        {content && (
          <Text className='at-activity-indicator__content'>{content}</Text>
        )}
      </View>
    )
  }
}

AtActivityIndicator.defaultProps = {
  size: 0,
  mode: 'normal',
  color: '',
  content: '',
  className: '',
}

AtActivityIndicator.propTypes = {
  size: PropTypes.number,
  mode: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}
