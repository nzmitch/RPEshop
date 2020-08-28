import React from 'react'
import {
    useEffect
} from 'react'
import {
    useRef
} from 'react'

import {
    canvas
} from './styles'

const App = () => {
    const ref = useRef()

    useEffect(() => {
        var c = ref.current,
            w = (c.width = window.innerWidth),
            h = (c.height = window.innerHeight),
            ctx = c.getContext('2d'),
            opts = {
                rotVel: 0.01,
                color: 'rgba(50,50,50, 0.3)',
                depth: 250,
                focalLength: 250,
                vanishPoint: {
                    x: w / 2,
                    y: h / 2,
                },
                zoom: 1.4,
                showDots: false,

            },
            pointData,
            lineData,
            points = [],
            lines = [],
            pong = {
                paddle: {
                    width: 0.03,
                    height: 0.2,
                },
                player: {
                    x: 0.05,
                    y: 0.4,
                },
                computer: {
                    x: 0.9,
                    y: 0.4,
                },
                ball: {
                    x: 0.475,
                    y: 0.475,
                    width: 0.05,
                    height: 0.05,
                    vx: opts.ballSpeed,
                    vy: opts.ballSpeed,
                    respawnTime: opts.respawnTime,
                },

                controls: {
                    up: false,
                    down: false,
                },

                points: [],
                lines: [],
            },
            rot = 0,
            cos = 1,
            sin = 0,
            tick = 0

        function Point(x, y, z, index) {
            this.x = x
            this.y = y
            this.z = z

            this.index = index
        }

        Point.prototype.setScreen = function () {
            var x = this.x,
                y = this.y,
                z = this.z,
                x1 = x

            // rotate in y
            x = x * cos - z * sin
            z = z * cos + x1 * sin

            // translate z
            z += opts.depth

            var scale = opts.focalLength / z

            this.scale = scale
            this.sx = x * scale // screen X
            this.sy = y * scale

            if (!opts.showDots) return
            ctx.fillStyle = opts.textColor
            ctx.font = scale * 6 + 'px "Courier New"'
            ctx.fillText(this.index, this.sx - scale * 3, this.sy - scale * 3)
        }

        function Line(points) {
            this.points = points
        }
        Line.prototype.draw = function () {
            ctx.moveTo(this.points[0].sx, this.points[0].sy)
            this.points.map(point => ctx.lineTo(point.sx, point.sy))
        }

        function anim() {
            window.requestAnimationFrame(anim)

                ++tick

            rot += opts.rotVel
            cos = Math.cos(rot)
            sin = Math.sin(rot)

            ctx.fillStyle = "rgba(255, 255, 255, 1)"
            ctx.fillRect(0, 0, w, h)
            
            ctx.translate(opts.vanishPoint.x, opts.vanishPoint.y)
            ctx.scale(opts.zoom, opts.zoom)
            ctx.lineCap = 'square'
            ctx.miterLimit = 2

            ctx.strokeStyle = opts.color
            ctx.beginPath()
            points.map(point => point.setScreen())
            lines.map(line => line.draw())
            ctx.stroke()

            ctx.strokeStyle = opts.gameColor
            ctx.beginPath()
            pong.points.map(point => point.setScreen())
            pong.lines.map(line => line.draw())
            ctx.stroke()

            ctx.scale(1 / opts.zoom, 1 / opts.zoom)
            ctx.translate(-opts.vanishPoint.x, -opts.vanishPoint.y)
        }

        function init() {
            for (var i = 0; i < pointData.length; i += 3) {
                var x = pointData[i],
                    y = pointData[i + 1],
                    z = pointData[i + 2]

                // space for other initial transformations like scaling here
                x *= 40
                y *= 40
                z *= 40

                points.push(new Point(x, y, z, i / 3))
            }

            // hope this is not too confusing
            for (var i = 0; i < lineData.length; ++i)
                lines.push(new Line(lineData[i].map(index => points[index])))
            anim()
        }

        window.addEventListener('resize', function () {

            w = c.width = window.innerWidth;
            h = c.height = window.innerHeight;

            opts.vanishPoint.x = w / 2;
            opts.vanishPoint.y = h / 2;
        });

        // found out manually, using showDots: true
        pointData = [
            // computer screen 0-3
            -1,
            -1,
            0,
            -1,
            1,
            0,
            1,
            1,
            0,
            1,
            -1,
            0,
            // computer frame 4-7
            -1.3,
            -1.3,
            0,
            -1.3,
            1.3,
            0,
            1.3,
            1.3,
            0,
            1.3,
            -1.3,
            0,
            // computer back 8-11
            -0.8,
            -0.8,
            1.5,
            -0.8,
            0.8,
            1.5,
            0.8,
            0.8,
            1.5,
            0.8,
            -0.8,
            1.5,
            // connector to stand 12-18
            // top 12-15
            0.6,
            1.15,
            0.5,
            -0.6,
            1.15,
            0.5,
            -0.6,
            0.98,
            1,
            0.6,
            0.98,
            1,
            // bottom 16-19
            0.6,
            1.7,
            0.5,
            -0.6,
            1.7,
            0.5,
            -0.6,
            1.7,
            1,
            0.6,
            1.7,
            1,
            // stand 20-27
            // top 20-23
            1.8,
            1.7,
            -0.1,
            -1.8,
            1.7,
            -0.1,
            -1.8,
            1.7,
            1.8,
            1.8,
            1.7,
            1.8,
            // bottom 24-27
            1.8,
            1.9,
            -0.1,
            -1.8,
            1.9,
            -0.1,
            -1.8,
            1.9,
            1.8,
            1.8,
            1.9,
            1.8,
            // keyboard 28-43
            // frame 28-35
            // top 28-31
            2,
            1.6,
            -0.8,
            2,
            1.7,
            -2.3,
            -2,
            1.7,
            -2.3,
            -2,
            1.6,
            -0.8,
            // bottom 32-35
            2,
            1.9,
            -0.8,
            2,
            1.9,
            -2.3,
            -2,
            1.9,
            -2.3,
            -2,
            1.9,
            -0.8,
            // keys 36-43
            // letters + nums 36-39
            0.5,
            1.612,
            -1,
            0.5,
            1.688,
            -2.1,
            -1.8,
            1.688,
            -2.1,
            -1.8,
            1.612,
            -1,
            // numpad 40-43
            1.8,
            1.612,
            -1,
            1.8,
            1.688,
            -2.1,
            0.9,
            1.688,
            -2.1,
            0.9,
            1.612,
            -1,
            // tower
            // top
            2.2,
            -1.2,
            2.7,
            2.2,
            -1.2,
            0.3,
            3.5,
            -1.2,
            0.3,
            3.5,
            -1.2,
            2.7,
            // bottom
            2.2,
            1.9,
            2.7,
            2.2,
            1.9,
            0.3,
            3.5,
            1.9,
            0.3,
            3.5,
            1.9,
            2.7,
            // inputs
            2.5,
            -0.8,
            0.3,
            3.2,
            -0.8,
            0.3,

            2.5,
            -0.5,
            0.3,
            3.2,
            -0.5,
            0.3,

            2.5,
            -0.2,
            0.3,
            3.2,
            -0.2,
            0.3,
            3.2,
            0.3,
            0.3,
            2.5,
            0.3,
            0.3,

            2.5,
            0.6,
            0.3,
            3.2,
            0.6,
            0.3,

            2.8,
            0.9,
            0.3,
            3.2,
            0.9,
            0.3,
            3.2,
            1.2,
            0.3,
            2.8,
            1.2,
            0.3,
        ]
        lineData = [
            // computer
            [0, 1, 2, 3, 0],
            [4, 5, 6, 7, 11, 8, 4, 7],
            [11, 10, 9, 8],
            [6, 10],
            [9, 5],
            // connector
            [12, 15, 14, 13, 12, 16, 19, 15],
            [19, 18, 14],
            [18, 17, 13],
            [17, 16],
            // stand
            [22, 21, 25, 26, 22, 23, 20, 21],
            [25, 24, 27, 26],
            [24, 20],
            [27, 23],
            // keyboard
            [31, 30, 29, 28, 31, 35, 34, 33, 32, 35],
            [34, 30],
            [33, 29],
            [32, 28],
            [40, 41, 42, 43, 40],
            [36, 37, 38, 39, 36],

        ]

        init()
    })

    return <canvas ref = {
        ref
    }
    css = {
        canvas
    }
    />
}

export default App
